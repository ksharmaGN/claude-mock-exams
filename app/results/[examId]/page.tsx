'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';

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

interface QuestionResult {
  question: Question;
  userAnswer: string | null;
  isCorrect: boolean | null;
  timeSpent: number;
}

interface ExamResult {
  examId: number;
  examType: string;
  selectedTopics: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeTaken: number;
  scorePercentage: number;
  startedAt: string;
  completedAt: string;
  questions: QuestionResult[];
}

export default function ResultsPage({ params }: { params: Promise<{ examId: string }> }) {
  const resolvedParams = use(params);
  const [result, setResult] = useState<ExamResult | null>(null);
  const [showExplanations, setShowExplanations] = useState(true);
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'wrong'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/exam/${resolvedParams.examId}`)
      .then(res => res.json())
      .then(data => {
        setResult(data);
        setLoading(false);
      });
  }, [resolvedParams.examId]);

  if (loading || !result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading results...</div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-50 border-green-200';
    if (percentage >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const filteredQuestions = result.questions.filter(q => {
    if (filterType === 'all') return true;
    if (filterType === 'correct') return q.isCorrect === true;
    if (filterType === 'wrong') return q.isCorrect === false || q.userAnswer === null;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Results Summary */}
        <div className={`bg-white rounded-lg shadow-md p-8 mb-6 border-2 ${getScoreBgColor(result.scorePercentage)}`}>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Exam Results</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Score</div>
              <div className={`text-3xl font-bold ${getScoreColor(result.scorePercentage)}`}>
                {result.scorePercentage.toFixed(1)}%
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">Correct</div>
              <div className="text-3xl font-bold text-green-600">
                {result.correctAnswers}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">Wrong</div>
              <div className="text-3xl font-bold text-red-600">
                {result.wrongAnswers}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">Time Taken</div>
              <div className="text-2xl font-bold text-gray-900">
                {formatTime(result.timeTaken)}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border">
            <div className="text-sm text-gray-600 mb-2">Exam Type</div>
            <div className="font-medium">
              {result.examType === 'week' ? 'Week-by-Week' : result.examType === 'domain' ? 'Domain-Specific' : 'Full Exam'}
            </div>
            {result.examType !== 'full' && (
              <>
                <div className="text-sm text-gray-600 mt-2 mb-1">Topics</div>
                <div className="text-sm">{JSON.parse(result.selectedTopics).join(', ')}</div>
              </>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              href="/"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700"
            >
              Take Another Exam
            </Link>
            <Link
              href="/history"
              className="px-6 py-3 rounded-lg font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              View History
            </Link>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({result.totalQuestions})
            </button>
            <button
              onClick={() => setFilterType('correct')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterType === 'correct'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Correct ({result.correctAnswers})
            </button>
            <button
              onClick={() => setFilterType('wrong')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterType === 'wrong'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wrong ({result.wrongAnswers})
            </button>
          </div>

          <label className="flex items-center gap-2 ml-auto">
            <input
              type="checkbox"
              checked={showExplanations}
              onChange={(e) => setShowExplanations(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <span className="text-sm font-medium">Show Explanations</span>
          </label>
        </div>

        {/* Questions Review */}
        <div className="space-y-6">
          {filteredQuestions.map((item, idx) => {
            const userAnswerLetter = item.userAnswer || 'Not answered';
            const correctAnswerLetter = item.question.correct_answer;
            const isCorrect = item.isCorrect === true;

            return (
              <div
                key={idx}
                className={`bg-white rounded-lg shadow-md p-6 border-2 ${
                  isCorrect ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {isCorrect ? '✓' : '✗'}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Question {result.questions.indexOf(item) + 1}
                    </h3>
                    <p className="text-gray-800 mb-4">{item.question.question}</p>

                    <div className="space-y-2">
                      {['A', 'B', 'C', 'D'].map((option) => {
                        const optionText = item.question[`option_${option.toLowerCase()}` as keyof Question] as string;
                        const isUserAnswer = userAnswerLetter === option;
                        const isCorrectAnswer = correctAnswerLetter === option;

                        let bgColor = 'bg-gray-50';
                        let borderColor = 'border-gray-200';
                        let textColor = 'text-gray-900';

                        if (isCorrectAnswer) {
                          bgColor = 'bg-green-50';
                          borderColor = 'border-green-500';
                          textColor = 'text-green-900';
                        } else if (isUserAnswer && !isCorrect) {
                          bgColor = 'bg-red-50';
                          borderColor = 'border-red-500';
                          textColor = 'text-red-900';
                        }

                        return (
                          <div
                            key={option}
                            className={`p-3 rounded-lg border-2 ${bgColor} ${borderColor}`}
                          >
                            <div className="flex items-start">
                              <span className={`font-semibold mr-3 ${textColor}`}>{option}.</span>
                              <span className={textColor}>{optionText}</span>
                              {isCorrectAnswer && (
                                <span className="ml-auto text-green-700 font-semibold">✓ Correct</span>
                              )}
                              {isUserAnswer && !isCorrect && (
                                <span className="ml-auto text-red-700 font-semibold">Your Answer</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {showExplanations && (
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-semibold text-blue-900 mb-2">Explanation:</div>
                        <p className="text-blue-800 text-sm">{item.question.explanation}</p>
                      </div>
                    )}

                    <div className="mt-3 text-sm text-gray-600">
                      Time spent: {formatTime(item.timeSpent)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Take Another Exam
          </Link>
        </div>
      </div>
    </div>
  );
}
