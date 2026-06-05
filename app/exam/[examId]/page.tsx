'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
}

interface QuestionWithAnswer {
  question: Question;
  userAnswer: string | null;
  isCorrect: boolean | null;
  timeSpent: number;
}

interface ExamData {
  examId: number;
  examType: string;
  totalQuestions: number;
  questions: QuestionWithAnswer[];
}

export default function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [exam, setExam] = useState<ExamData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [totalTime, setTotalTime] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/exam/${resolvedParams.examId}`)
      .then(res => res.json())
      .then(data => {
        setExam(data);
        setLoading(false);
        setStartTime(Date.now());
        setQuestionStartTime(Date.now());
      });
  }, [resolvedParams.examId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (exam && exam.questions[currentIndex]?.userAnswer) {
      setSelectedAnswer(exam.questions[currentIndex].userAnswer);
    } else {
      setSelectedAnswer(null);
    }
    setQuestionStartTime(Date.now());
  }, [currentIndex, exam]);

  if (loading || !exam) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading exam...</div>
      </div>
    );
  }

  const currentQuestion = exam.questions[currentIndex];
  const progress = ((currentIndex + 1) / exam.totalQuestions) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = async () => {
    if (!selectedAnswer) {
      alert('Please select an answer');
      return;
    }

    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);

    await fetch(`/api/exam/${exam.examId}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionId: currentQuestion.question.id,
        userAnswer: selectedAnswer,
        timeSpent,
      }),
    });

    // Update local state
    const updatedQuestions = [...exam.questions];
    updatedQuestions[currentIndex] = {
      ...updatedQuestions[currentIndex],
      userAnswer: selectedAnswer,
      timeSpent,
    };

    setExam({ ...exam, questions: updatedQuestions });

    // Move to next question or finish
    if (currentIndex < exam.totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFinishExam = async () => {
    // Check if all questions are answered
    const unanswered = exam.questions.filter(q => !q.userAnswer).length;
    if (unanswered > 0) {
      if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to finish anyway?`)) {
        return;
      }
    }

    await fetch(`/api/exam/${exam.examId}/complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        totalTimeTaken: totalTime,
      }),
    });

    router.push(`/results/${exam.examId}`);
  };

  const handleQuestionNavigation = (index: number) => {
    setCurrentIndex(index);
  };

  const answeredCount = exam.questions.filter(q => q.userAnswer).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="font-medium">Question {currentIndex + 1} of {exam.totalQuestions}</span>
              <span className="text-gray-600 ml-4">Answered: {answeredCount}/{exam.totalQuestions}</span>
            </div>
            <div className="text-lg font-semibold">
              Time: {formatTime(totalTime)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {currentQuestion.question.question}
              </h2>

              <div className="space-y-3">
                {['A', 'B', 'C', 'D'].map((option) => {
                  const optionText = currentQuestion.question[`option_${option.toLowerCase()}` as keyof Question] as string;
                  const isSelected = selectedAnswer === option;

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <span className="font-semibold mr-3 text-gray-700">{option}.</span>
                        <span className={isSelected ? 'font-medium' : ''}>{optionText}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-4">
                {currentIndex > 0 && (
                  <button
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Previous
                  </button>
                )}

                {currentIndex < exam.totalQuestions - 1 ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {currentQuestion.userAnswer ? 'Update & Next' : 'Submit & Next'}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {currentQuestion.userAnswer ? 'Update Answer' : 'Submit Answer'}
                    </button>
                    <button
                      onClick={handleFinishExam}
                      className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
                    >
                      Finish Exam
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-6">
              <h3 className="font-semibold mb-3">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-2">
                {exam.questions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionNavigation(idx)}
                    className={`aspect-square rounded flex items-center justify-center text-sm font-medium ${
                      idx === currentIndex
                        ? 'bg-blue-600 text-white'
                        : q.userAnswer
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border border-green-200 rounded" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded" />
                  <span>Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded" />
                  <span>Current</span>
                </div>
              </div>

              <button
                onClick={handleFinishExam}
                className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
              >
                Finish Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
