import { getDb } from './db';
import { questionBank, Question } from './question-bank';

export interface ExamConfig {
  examType: 'week' | 'domain' | 'full';
  selectedTopics: string[]; // week numbers or domain names
}

export interface ExamQuestion {
  id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
}

export interface ExamAnswer {
  questionId: number;
  userAnswer: string | null;
  isCorrect: boolean | null;
  timeSpent: number;
}

export interface ExamResult {
  examId: number;
  examType: string;
  selectedTopics: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeTaken: number;
  scorePercentage: number;
  startedAt: string;
  completedAt: string | null;
  questions: Array<{
    question: ExamQuestion;
    userAnswer: string | null;
    isCorrect: boolean | null;
    timeSpent: number;
  }>;
}

// Seed database with questions if not already populated
export function seedQuestions() {
  const db = getDb();

  // Check if questions already exist
  const count = db.prepare('SELECT COUNT(*) as count FROM questions').get() as { count: number };

  if (count.count === 0) {
    console.log('Seeding question bank...');

    const insert = db.prepare(`
      INSERT INTO questions (week, domain, topic, question, option_a, option_b, option_c, option_d, correct_answer, explanation, difficulty)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertMany = db.transaction((questions: Question[]) => {
      for (const q of questions) {
        insert.run(
          q.week || null,
          q.domain,
          q.topic,
          q.question,
          q.option_a,
          q.option_b,
          q.option_c,
          q.option_d,
          q.correct_answer,
          q.explanation,
          q.difficulty || 'medium'
        );
      }
    });

    insertMany(questionBank);
    console.log(`Seeded ${questionBank.length} questions`);
  }
}

// Get random questions based on exam configuration
export function getRandomQuestions(config: ExamConfig, userId: string = 'default'): ExamQuestion[] {
  const db = getDb();
  let query = '';
  let params: any[] = [];

  if (config.examType === 'week') {
    // Week-by-week: 10 questions per selected week
    const weekNumbers = config.selectedTopics.map(t => parseInt(t));
    const questionsPerWeek = 10;
    const allQuestions: ExamQuestion[] = [];

    for (const week of weekNumbers) {
      // Get questions for this week that were least recently used
      query = `
        SELECT q.* FROM questions q
        LEFT JOIN question_usage qu ON q.id = qu.question_id AND qu.user_id = ?
        WHERE q.week = ?
        ORDER BY
          CASE WHEN qu.last_used IS NULL THEN 0 ELSE 1 END,
          qu.last_used ASC,
          RANDOM()
        LIMIT ?
      `;
      const questions = db.prepare(query).all(userId, week, questionsPerWeek) as ExamQuestion[];
      allQuestions.push(...questions);
    }

    return allQuestions;
  } else if (config.examType === 'domain') {
    // Domain-specific: 10 questions per selected domain
    const questionsPerDomain = 10;
    const allQuestions: ExamQuestion[] = [];

    for (const domain of config.selectedTopics) {
      query = `
        SELECT q.* FROM questions q
        LEFT JOIN question_usage qu ON q.id = qu.question_id AND qu.user_id = ?
        WHERE q.domain = ?
        ORDER BY
          CASE WHEN qu.last_used IS NULL THEN 0 ELSE 1 END,
          qu.last_used ASC,
          RANDOM()
        LIMIT ?
      `;
      const questions = db.prepare(query).all(userId, domain, questionsPerDomain) as ExamQuestion[];
      allQuestions.push(...questions);
    }

    return allQuestions;
  } else {
    // Full exam: 50 questions distributed across all domains
    query = `
      SELECT q.* FROM questions q
      LEFT JOIN question_usage qu ON q.id = qu.question_id AND qu.user_id = ?
      ORDER BY
        CASE WHEN qu.last_used IS NULL THEN 0 ELSE 1 END,
        qu.last_used ASC,
        RANDOM()
      LIMIT 50
    `;
    return db.prepare(query).all(userId) as ExamQuestion[];
  }
}

// Create a new exam
export function createExam(config: ExamConfig): number {
  const db = getDb();
  const questions = getRandomQuestions(config);

  const insert = db.prepare(`
    INSERT INTO exams (exam_type, selected_topics, total_questions, status)
    VALUES (?, ?, ?, 'in_progress')
  `);

  const result = insert.run(
    config.examType,
    JSON.stringify(config.selectedTopics),
    questions.length
  );

  const examId = result.lastInsertRowid as number;

  // Insert exam questions
  const insertAnswer = db.prepare(`
    INSERT INTO exam_answers (exam_id, question_id)
    VALUES (?, ?)
  `);

  const insertMany = db.transaction(() => {
    for (const q of questions) {
      insertAnswer.run(examId, q.id);
    }
  });

  insertMany();

  // Update question usage
  updateQuestionUsage(questions.map(q => q.id));

  return examId;
}

// Update question usage tracking
function updateQuestionUsage(questionIds: number[], userId: string = 'default') {
  const db = getDb();

  const upsert = db.prepare(`
    INSERT INTO question_usage (question_id, user_id, last_used, usage_count)
    VALUES (?, ?, CURRENT_TIMESTAMP, 1)
    ON CONFLICT(question_id, user_id)
    DO UPDATE SET
      last_used = CURRENT_TIMESTAMP,
      usage_count = usage_count + 1
  `);

  const updateMany = db.transaction(() => {
    for (const qId of questionIds) {
      upsert.run(qId, userId);
    }
  });

  updateMany();
}

// Get exam by ID
export function getExam(examId: number): ExamResult | null {
  const db = getDb();

  const exam = db.prepare(`
    SELECT * FROM exams WHERE id = ?
  `).get(examId);

  if (!exam) return null;

  const answers = db.prepare(`
    SELECT
      ea.*,
      q.question, q.option_a, q.option_b, q.option_c, q.option_d,
      q.correct_answer, q.explanation
    FROM exam_answers ea
    JOIN questions q ON ea.question_id = q.id
    WHERE ea.exam_id = ?
    ORDER BY ea.id
  `).all(examId);

  return {
    examId: (exam as any).id,
    examType: (exam as any).exam_type,
    selectedTopics: (exam as any).selected_topics,
    totalQuestions: (exam as any).total_questions,
    correctAnswers: (exam as any).correct_answers,
    wrongAnswers: (exam as any).wrong_answers,
    timeTaken: (exam as any).time_taken,
    scorePercentage: (exam as any).score_percentage,
    startedAt: (exam as any).started_at,
    completedAt: (exam as any).completed_at,
    questions: (answers as any[]).map((a: any) => ({
      question: {
        id: a.question_id,
        question: a.question,
        option_a: a.option_a,
        option_b: a.option_b,
        option_c: a.option_c,
        option_d: a.option_d,
        correct_answer: a.correct_answer,
        explanation: a.explanation,
      },
      userAnswer: a.user_answer,
      isCorrect: a.is_correct,
      timeSpent: a.time_spent || 0,
    })),
  };
}

// Submit answer for a question
export function submitAnswer(examId: number, questionId: number, userAnswer: string, timeSpent: number) {
  const db = getDb();

  // Get correct answer
  const question = db.prepare('SELECT correct_answer FROM questions WHERE id = ?').get(questionId) as { correct_answer: string };
  const isCorrect = question.correct_answer === userAnswer;

  // Update exam answer
  db.prepare(`
    UPDATE exam_answers
    SET user_answer = ?, is_correct = ?, time_spent = ?, answered_at = CURRENT_TIMESTAMP
    WHERE exam_id = ? AND question_id = ?
  `).run(userAnswer, isCorrect ? 1 : 0, timeSpent, examId, questionId);

  return isCorrect;
}

// Complete exam
export function completeExam(examId: number, totalTimeTaken: number) {
  const db = getDb();

  // Calculate statistics
  const stats = db.prepare(`
    SELECT
      COUNT(*) as total,
      SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct,
      SUM(CASE WHEN is_correct = 0 THEN 1 ELSE 0 END) as wrong
    FROM exam_answers
    WHERE exam_id = ?
  `).get(examId) as { total: number; correct: number; wrong: number };

  const scorePercentage = (stats.correct / stats.total) * 100;

  // Update exam
  db.prepare(`
    UPDATE exams
    SET
      correct_answers = ?,
      wrong_answers = ?,
      time_taken = ?,
      score_percentage = ?,
      status = 'completed',
      completed_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(stats.correct, stats.wrong, totalTimeTaken, scorePercentage, examId);

  return {
    correctAnswers: stats.correct,
    wrongAnswers: stats.wrong,
    scorePercentage,
  };
}

// Get exam history
export function getExamHistory(): ExamResult[] {
  const db = getDb();

  const exams = db.prepare(`
    SELECT * FROM exams
    WHERE status = 'completed'
    ORDER BY completed_at DESC
  `).all();

  return (exams as any[]).map((exam: any) => ({
    examId: exam.id,
    examType: exam.exam_type,
    selectedTopics: exam.selected_topics,
    totalQuestions: exam.total_questions,
    correctAnswers: exam.correct_answers,
    wrongAnswers: exam.wrong_answers,
    timeTaken: exam.time_taken,
    scorePercentage: exam.score_percentage,
    startedAt: exam.started_at,
    completedAt: exam.completed_at,
    questions: [],
  }));
}

// Get available topics
export function getAvailableTopics() {
  const db = getDb();

  const weeks = db.prepare(`
    SELECT DISTINCT week, topic
    FROM questions
    WHERE week IS NOT NULL
    ORDER BY week
  `).all() as Array<{ week: number; topic: string }>;

  const domains = db.prepare(`
    SELECT DISTINCT domain
    FROM questions
    ORDER BY domain
  `).all() as Array<{ domain: string }>;

  // Group weeks by their topics
  const weekMap = new Map<number, string>();
  weeks.forEach(w => {
    if (!weekMap.has(w.week)) {
      weekMap.set(w.week, w.topic);
    }
  });

  return {
    weeks: Array.from(weekMap.entries()).map(([week, topic]) => ({
      value: week.toString(),
      label: `Week ${week}: ${topic}`,
    })),
    domains: domains.map(d => ({
      value: d.domain,
      label: d.domain,
    })),
  };
}
