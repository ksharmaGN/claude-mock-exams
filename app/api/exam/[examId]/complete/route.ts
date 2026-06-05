import { NextRequest, NextResponse } from 'next/server';
import { completeExam } from '@/lib/db-service';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ examId: string }> }
) {
  try {
    const { examId } = await params;
    const body = await request.json();
    const { totalTimeTaken } = body;

    const result = completeExam(parseInt(examId), totalTimeTaken);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error completing exam:', error);
    return NextResponse.json({ error: 'Failed to complete exam' }, { status: 500 });
  }
}
