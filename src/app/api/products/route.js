import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { category, description, imageUrl, isActive, productBarcode, productPrice, productSKU, productSellPrice, productTitle, slug, tags, l } = await request.json();
    const newCategory = await prismadb.products.create({
      data: { category, description, imageUrl, isActive, productBarcode, productPrice, productSKU, productSellPrice, productTitle, slug, tags }
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
