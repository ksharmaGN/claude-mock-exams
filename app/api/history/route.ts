import { NextResponse } from 'next/server';
import { getExamHistory } from '@/lib/db-service';

export async function GET() {
  try {
    const history = getExamHistory();
    return NextResponse.json(history);
  } catch (error) {
    console.error('Error fetching history:', error);
    return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 });
  }
}
