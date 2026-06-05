'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TopicOption {
  value: string;
  label: string;
}

interface AvailableTopics {
  weeks: TopicOption[];
  domains: TopicOption[];
}

export default function Home() {
  const [examType, setExamType] = useState<'week' | 'domain' | 'full'>('week');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [availableTopics, setAvailableTopics] = useState<AvailableTopics>({ weeks: [], domains: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch available topics
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => setAvailableTopics(data));
  }, []);

  useEffect(() => {
    setSelectedTopics([]);
  }, [examType]);

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleStartExam = async () => {
    if (examType !== 'full' && selectedTopics.length === 0) {
      alert('Please select at least one topic');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/exam/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          examType,
          selectedTopics: examType === 'full' ? [] : selectedTopics,
        }),
      });

      const { examId } = await response.json();
      window.location.href = `/exam/${examId}`;
    } catch (error) {
      alert('Failed to create exam');
      setLoading(false);
    }
  };

  const currentTopics = examType === 'week' ? availableTopics.weeks : availableTopics.domains;
  const expectedQuestions = examType === 'full' ? 50 : selectedTopics.length * 10;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Claude Certified Architect Mock Test
          </h1>
          <p className="text-gray-600 mb-8">
            Practice for the Claude Certified Architect certification exam
          </p>

          <div className="space-y-6">
            {/* Exam Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Exam Type
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setExamType("week")}
                  className={`w-full text-left text-black px-4 py-3 rounded-lg border-2 transition-colors ${
                    examType === "week"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-black">
                    Week-by-Week Topics
                  </div>
                  <div className="text-sm text-gray-600">
                    Select specific weeks to practice (10 questions per week)
                  </div>
                </button>

                <button
                  onClick={() => setExamType("domain")}
                  className={`w-full text-left text-black px-4 py-3 rounded-lg border-2 transition-colors ${
                    examType === "domain"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-black">
                    Domain-Specific Topics
                  </div>
                  <div className="text-sm text-gray-600">
                    Select specific domains to practice (10 questions per
                    domain)
                  </div>
                </button>

                <button
                  onClick={() => setExamType("full")}
                  className={`w-full text-left text-black px-4 py-3 rounded-lg border-2 transition-colors ${
                    examType === "full"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-black">Full Exam</div>
                  <div className="text-sm text-gray-600">
                    Complete practice exam with 50 questions across all domains
                  </div>
                </button>
              </div>
            </div>

            {/* Topic Selection */}
            {examType !== "full" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Topics (Multiple Selection Allowed)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-3">
                  {currentTopics.map((topic) => (
                    <label
                      key={topic.value}
                      className={`flex items-center text-black px-3 py-2 rounded cursor-pointer transition-colors ${
                        selectedTopics.includes(topic.value)
                          ? "bg-blue-100 text-blue-900"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic.value)}
                        onChange={() => handleTopicToggle(topic.value)}
                        className="mr-3 h-4 w-4 text-blue-600 rounded border-gray-300"
                      />
                      <span className="text-sm">{topic.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Exam Summary</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>
                  Type:{" "}
                  <span className="font-medium text-gray-900">
                    {examType === "week"
                      ? "Week-by-Week"
                      : examType === "domain"
                        ? "Domain-Specific"
                        : "Full Exam"}
                  </span>
                </div>
                {examType !== "full" && (
                  <div>
                    Selected:{" "}
                    <span className="font-medium text-gray-900">
                      {selectedTopics.length} topic
                      {selectedTopics.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                )}
                <div>
                  Total Questions:{" "}
                  <span className="font-medium text-gray-900">
                    {expectedQuestions}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleStartExam}
                disabled={
                  loading ||
                  (examType !== "full" && selectedTopics.length === 0)
                }
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Creating Exam..." : "Start Exam"}
              </button>

              <Link
                href="/history"
                className="px-6 py-3 rounded-lg font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                View History
              </Link>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold text-blue-900 mb-2">
            About This Mock Test
          </h2>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>
              • Contains 1500+ questions covering all certification domains
            </li>
            <li>
              • Questions are randomly selected from the pool to ensure variety
            </li>
            <li>
              • System tracks previously seen questions to show you new ones
            </li>
            <li>• All exam history is saved for your review</li>
            <li>
              • Review your answers and explanations after completing the exam
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
