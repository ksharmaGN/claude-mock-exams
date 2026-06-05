import { NextResponse } from 'next/server';
import { seedQuestions, getAvailableTopics } from '@/lib/db-service';

export async function GET() {
  try {
    // Ensure questions are seeded
    seedQuestions();

    const topics = getAvailableTopics();
    return NextResponse.json(topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
    return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
  }
}
