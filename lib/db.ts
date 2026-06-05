import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'mock-test.db');
let db: Database.Database | null = null;

export function getDb() {
  if (!db) {
    const fs = require('fs');
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    initializeDatabase(db);
  }
  return db;
}

function initializeDatabase(db: Database.Database) {
  // Questions table
  db.exec(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      week INTEGER,
      domain TEXT,
      topic TEXT,
      question TEXT NOT NULL,
      option_a TEXT NOT NULL,
      option_b TEXT NOT NULL,
      option_c TEXT NOT NULL,
      option_d TEXT NOT NULL,
      correct_answer TEXT NOT NULL,
      explanation TEXT,
      difficulty TEXT DEFAULT 'medium',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_questions_week ON questions(week);
    CREATE INDEX IF NOT EXISTS idx_questions_domain ON questions(domain);
    CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(topic);
  `);

  // Exams table
  db.exec(`
    CREATE TABLE IF NOT EXISTS exams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      exam_type TEXT NOT NULL,
      selected_topics TEXT NOT NULL,
      total_questions INTEGER NOT NULL,
      correct_answers INTEGER DEFAULT 0,
      wrong_answers INTEGER DEFAULT 0,
      time_taken INTEGER DEFAULT 0,
      score_percentage REAL DEFAULT 0,
      status TEXT DEFAULT 'in_progress',
      started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      completed_at DATETIME
    );

    CREATE INDEX IF NOT EXISTS idx_exams_status ON exams(status);
    CREATE INDEX IF NOT EXISTS idx_exams_started_at ON exams(started_at);
  `);

  // Exam answers table (tracks each question attempt)
  db.exec(`
    CREATE TABLE IF NOT EXISTS exam_answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      exam_id INTEGER NOT NULL,
      question_id INTEGER NOT NULL,
      user_answer TEXT,
      is_correct BOOLEAN,
      time_spent INTEGER DEFAULT 0,
      answered_at DATETIME,
      FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE,
      FOREIGN KEY (question_id) REFERENCES questions(id)
    );

    CREATE INDEX IF NOT EXISTS idx_exam_answers_exam_id ON exam_answers(exam_id);
  `);

  // Question usage tracking (to ensure variety)
  db.exec(`
    CREATE TABLE IF NOT EXISTS question_usage (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question_id INTEGER NOT NULL,
      user_id TEXT DEFAULT 'default',
      last_used DATETIME DEFAULT CURRENT_TIMESTAMP,
      usage_count INTEGER DEFAULT 1,
      FOREIGN KEY (question_id) REFERENCES questions(id),
      UNIQUE(question_id, user_id)
    );

    CREATE INDEX IF NOT EXISTS idx_question_usage_user ON question_usage(user_id, last_used);
  `);
}

export function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}
