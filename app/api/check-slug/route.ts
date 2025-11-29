import { NextResponse } from 'next/server';
import { nonExistingSlug } from '@/app/lib/data';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
        return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 });
    }

    try {
        const doesNotExist = await nonExistingSlug(slug);
        return NextResponse.json({ exists: !doesNotExist });
    }catch (error) {
        return NextResponse.json({ error: 'Failed to check slug' }, { status: 500 });
    }
}