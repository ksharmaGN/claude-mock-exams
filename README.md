# Claude Certified Architect Mock Test Application

A comprehensive mock test application for the Claude Certified Architect certification exam. This application provides a complete testing environment with 150+ pre-generated questions covering all certification domains.

## Features

- **150+ Questions**: Comprehensive question bank covering all certification topics
- **Multiple Test Modes**:
  - Week-by-Week Topics (10 questions per week)
  - Domain-Specific Topics (10 questions per domain)
  - Full Exam Mode (50 questions)
- **Smart Question Selection**: Questions are randomly selected with memory context to ensure variety
- **Complete Exam Experience**:
  - Real-time timer
  - Question navigation
  - Progress tracking
  - Answer review with explanations
- **History Tracking**: All exam attempts are saved with detailed analytics
- **Offline Support**: All data stored locally using SQLite

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Database**: SQLite (better-sqlite3)
- **Styling**: Tailwind CSS
- **Date Handling**: date-fns

## Prerequisites

- Node.js >= 20.9.0
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd claude-cert-mock-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
claude-cert-mock-test/
├── app/
│   ├── api/
│   │   ├── exam/
│   │   │   ├── create/route.ts          # Create new exam
│   │   │   └── [examId]/
│   │   │       ├── route.ts              # Get exam data
│   │   │       ├── submit/route.ts       # Submit answer
│   │   │       └── complete/route.ts     # Complete exam
│   │   ├── history/route.ts              # Get exam history
│   │   └── topics/route.ts               # Get available topics
│   ├── exam/[examId]/page.tsx            # Exam taking interface
│   ├── results/[examId]/page.tsx         # Results and review page
│   ├── history/page.tsx                  # Exam history page
│   └── page.tsx                          # Home page (test selection)
├── lib/
│   ├── db.ts                             # Database initialization
│   ├── db-service.ts                     # Database service layer
│   └── question-bank.ts                  # Pre-generated questions
└── data/                                 # SQLite database (auto-created)
```

## How It Works

### Question Generation

All questions are pre-generated and stored in `lib/question-bank.ts`. The application includes:
- 10 questions per week (12 weeks)
- 10 additional questions per domain (5 domains)
- Additional mixed questions for comprehensive coverage

### Smart Question Selection

The application uses a sophisticated algorithm to select questions:
1. Questions are tagged with week/domain/topic information
2. Usage tracking ensures variety across exams
3. Least recently used questions are prioritized
4. Random selection within the filtered set

### Database Schema

**questions**: Stores all questions with options and correct answers
**exams**: Tracks exam sessions with metadata
**exam_answers**: Records user answers for each question in an exam
**question_usage**: Tracks question usage to ensure variety

### Exam Flow

1. **Selection**: User chooses exam type and topics
2. **Creation**: System generates exam with random questions
3. **Taking**: User answers questions with timer tracking
4. **Submission**: Answers are validated and stored
5. **Completion**: Exam is finalized with statistics
6. **Review**: User can review answers with explanations

## Features in Detail

### Test Selection
- Three exam modes: Week-by-Week, Domain-Specific, Full Exam
- Multi-select for topics
- Real-time question count preview

### Exam Taking
- Real-time timer
- Question navigator panel
- Visual progress tracking
- Answer selection and modification
- Previous/Next navigation

### Results & Review
- Score percentage with color coding
- Detailed answer review
- Explanations for all questions
- Time spent per question
- Filter by correct/wrong answers

### History
- All completed exams saved
- Overall statistics (average score, best score, total questions)
- Quick access to previous results

## Development

### Adding Questions

Edit `lib/question-bank.ts` and add questions following this format:

```typescript
{
  week: 1,                    // Optional: week number
  domain: 'Domain 1',         // Required: domain
  topic: 'Topic Name',        // Required: topic
  question: 'Question text',  // Required
  option_a: 'Option A',       // Required
  option_b: 'Option B',       // Required
  option_c: 'Option C',       // Required
  option_d: 'Option D',       // Required
  correct_answer: 'A',        // Required: A, B, C, or D
  explanation: 'Why this is correct', // Required
  difficulty: 'medium'        // Optional: easy, medium, hard
}
```

### Database Management

The SQLite database is automatically created in the `data/` directory on first run. To reset:

```bash
rm -rf data/
# Restart the application
```

## Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

**Node version error**: Make sure you're using Node.js 20.9.0 or higher
```bash
node --version  # Should be >= 20.9.0
```

**Database errors**: Delete the `data/` directory and restart the application

**Questions not loading**: Check that `lib/question-bank.ts` is properly formatted

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your questions or features
4. Submit a pull request

## License

MIT

## Certification Resources

- [Claude Certified Architect Study Guide](https://claudecertifications.com/claude-certified-architect/study-guide)
- [Anthropic Documentation](https://docs.anthropic.com)
- [Claude API Reference](https://docs.anthropic.com/api)

## Support

For issues or questions, please open an issue on GitHub.
