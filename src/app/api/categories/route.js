import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description } = await request.json();
    const newCategory = { title, slug, imageUrl, description };
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse(
      {
        message: 'Failt to create Category'
      },
      { status: 500 }
    );
  }
}
