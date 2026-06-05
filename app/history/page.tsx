'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

interface ExamHistoryItem {
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
}

export default function HistoryPage() {
  const [history, setHistory] = useState<ExamHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/history')
      .then(res => res.json())
      .then(data => {
        setHistory(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading history...</div>
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

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-100 text-green-800 border-green-200';
    if (percentage >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const calculateStats = () => {
    if (history.length === 0) return null;

    const totalExams = history.length;
    const avgScore = history.reduce((sum, exam) => sum + exam.scorePercentage, 0) / totalExams;
    const bestScore = Math.max(...history.map(e => e.scorePercentage));
    const totalQuestions = history.reduce((sum, exam) => sum + exam.totalQuestions, 0);
    const totalCorrect = history.reduce((sum, exam) => sum + exam.correctAnswers, 0);

    return { totalExams, avgScore, bestScore, totalQuestions, totalCorrect };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Exam History</h1>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Take New Exam
          </Link>
        </div>

        {history.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Exam History</h2>
            <p className="text-gray-600 mb-6">You haven't taken any exams yet</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Start Your First Exam
            </Link>
          </div>
        ) : (
          <>
            {/* Statistics Summary */}
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="text-sm text-gray-600 mb-1">Total Exams</div>
                  <div className="text-2xl font-bold text-gray-900">{stats.totalExams}</div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="text-sm text-gray-600 mb-1">Average Score</div>
                  <div className={`text-2xl font-bold ${getScoreColor(stats.avgScore)}`}>
                    {stats.avgScore.toFixed(1)}%
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="text-sm text-gray-600 mb-1">Best Score</div>
                  <div className={`text-2xl font-bold ${getScoreColor(stats.bestScore)}`}>
                    {stats.bestScore.toFixed(1)}%
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="text-sm text-gray-600 mb-1">Questions Attempted</div>
                  <div className="text-2xl font-bold text-gray-900">{stats.totalQuestions}</div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="text-sm text-gray-600 mb-1">Total Correct</div>
                  <div className="text-2xl font-bold text-green-600">{stats.totalCorrect}</div>
                </div>
              </div>
            )}

            {/* Exam List */}
            <div className="space-y-4">
              {history.map((exam) => {
                const topics = JSON.parse(exam.selectedTopics);
                const examTypeLabel =
                  exam.examType === 'week'
                    ? 'Week-by-Week'
                    : exam.examType === 'domain'
                    ? 'Domain-Specific'
                    : 'Full Exam';

                return (
                  <div key={exam.examId} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{examTypeLabel}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getScoreBadgeColor(exam.scorePercentage)}`}>
                            {exam.scorePercentage.toFixed(1)}%
                          </span>
                        </div>

                        {exam.examType !== 'full' && topics.length > 0 && (
                          <div className="text-sm text-gray-600 mb-2">
                            Topics: {topics.join(', ')}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>
                            {exam.correctAnswers}/{exam.totalQuestions} correct
                          </span>
                          <span>•</span>
                          <span>Time: {formatTime(exam.timeTaken)}</span>
                          <span>•</span>
                          <span>
                            {format(new Date(exam.completedAt), 'MMM d, yyyy h:mm a')}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href={`/results/${exam.examId}`}
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{exam.correctAnswers} / {exam.totalQuestions}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            exam.scorePercentage >= 80
                              ? 'bg-green-500'
                              : exam.scorePercentage >= 60
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${exam.scorePercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
