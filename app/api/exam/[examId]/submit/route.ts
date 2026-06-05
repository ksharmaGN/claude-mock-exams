import { NextRequest, NextResponse } from 'next/server';
import { submitAnswer } from '@/lib/db-service';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ examId: string }> }
) {
  try {
    const { examId } = await params;
    const body = await request.json();
    const { questionId, userAnswer, timeSpent } = body;

    const isCorrect = submitAnswer(parseInt(examId), questionId, userAnswer, timeSpent);

    return NextResponse.json({ isCorrect });
  } catch (error) {
    console.error('Error submitting answer:', error);
    return NextResponse.json({ error: 'Failed to submit answer' }, { status: 500 });
  }
}
