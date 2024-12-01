import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { category, slug, imageUrl, description } = await request.json();

    const newCategory = await prismadb.categories.create({
      data: {
        category,
        slug,
        imageUrl,
        description
      }
    });
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse(
      {
        message: 'Fail to create Category'
      },
      { status: 500 }
    );
  }
}
