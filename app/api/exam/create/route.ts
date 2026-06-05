import { NextRequest, NextResponse } from 'next/server';
import { createExam, seedQuestions } from '@/lib/db-service';

export async function POST(request: NextRequest) {
  try {
    // Ensure questions are seeded
    seedQuestions();

    const body = await request.json();
    const { examType, selectedTopics } = body;

    const examId = createExam({
      examType,
      selectedTopics,
    });

    return NextResponse.json({ examId });
  } catch (error) {
    console.error('Error creating exam:', error);
    return NextResponse.json({ error: 'Failed to create exam' }, { status: 500 });
  }
}
