// Unified Question Bank for Claude Certified Architect Certification
// This file imports and merges all topic-specific question banks

import { topic1Questions } from './question-bank-topic1';
import { topic2Questions } from './question-bank-topic2';
import { topic3Questions } from './question-bank-topic3';
import { topic4Questions } from './question-bank-topic4';
import { topic5Questions } from './question-bank-topic5';
import { topic6Questions } from './question-bank-topic6';
import { topic7Questions } from './question-bank-topic7';
import { topic8Questions } from './question-bank-topic8';
import { topic9Questions } from './question-bank-topic9';
import { topic10Questions } from './question-bank-topic10';
import { topic11Questions } from './question-bank-topic11';

export interface Question {
  week?: number;
  domain: string;
  topic: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
  difficulty?: string;
}

// Merge all topic question banks into a single array
export const questionBank: Question[] = [
  ...topic1Questions,   // Topic 1: Agentic Loops & Core API (100 questions)
  ...topic2Questions,   // Topic 2: Multi-Agent Orchestration (100 questions)
  ...topic3Questions,   // Topic 3: Hooks, Workflows & Sessions (100 questions)
  ...topic4Questions,   // Topic 4: Tool Design & MCP (100 questions)
  ...topic5Questions,   // Topic 5: Claude Code Configuration (100 questions)
  ...topic6Questions,   // Topic 6: Plan Mode & CI/CD (101 questions)
  ...topic7Questions,   // Topic 7: Prompt Engineering & Structured Output (103 questions)
  ...topic8Questions,   // Topic 8: Validation, Batch & Multi-Pass (120 questions)
  ...topic9Questions,   // Topic 9: Context Management (101 questions)
  ...topic10Questions,  // Topic 10: Advanced Context & Provenance (101 questions)
  ...topic11Questions,  // Topic 11: Integration & Best Practices (101 questions)
];

// Export individual topic arrays for selective loading
export {
  topic1Questions,
  topic2Questions,
  topic3Questions,
  topic4Questions,
  topic5Questions,
  topic6Questions,
  topic7Questions,
  topic8Questions,
  topic9Questions,
  topic10Questions,
  topic11Questions,
};

// Question bank statistics
export const questionBankStats = {
  totalQuestions: questionBank.length,
  topics: [
    { id: 1, name: 'Agentic Loops & Core API', count: topic1Questions.length, week: 1 },
    { id: 2, name: 'Multi-Agent Orchestration', count: topic2Questions.length, week: 2 },
    { id: 3, name: 'Hooks, Workflows & Sessions', count: topic3Questions.length, week: 3 },
    { id: 4, name: 'Tool Design & MCP', count: topic4Questions.length, week: 4 },
    { id: 5, name: 'Claude Code Configuration', count: topic5Questions.length, week: 5 },
    { id: 6, name: 'Plan Mode & CI/CD', count: topic6Questions.length, week: 6 },
    { id: 7, name: 'Prompt Engineering & Structured Output', count: topic7Questions.length, week: 7 },
    { id: 8, name: 'Validation, Batch & Multi-Pass', count: topic8Questions.length, week: 8 },
    { id: 9, name: 'Context Management', count: topic9Questions.length, week: 9 },
    { id: 10, name: 'Advanced Context & Provenance', count: topic10Questions.length, week: 10 },
    { id: 11, name: 'Integration & Best Practices', count: topic11Questions.length, week: 11 },
  ],
  domains: {
    'Agentic Architecture & Orchestration': topic1Questions.length + topic2Questions.length,
    'Claude Code Workflows & Configurations': topic3Questions.length + topic5Questions.length + topic6Questions.length,
    'Prompt Engineering & Structured Output': topic7Questions.length,
    'MCP & Tool Integrations': topic4Questions.length,
    'Context Management & Reliability': topic8Questions.length + topic9Questions.length + topic10Questions.length,
    'Integration & Production Best Practices': topic11Questions.length,
  },
};
