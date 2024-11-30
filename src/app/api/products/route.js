import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { productTitle, description, productSKU, productBarcode, productPrice, productSellPrice, category, tags, imageUrl } = await request.json();
    const newCategory = { productTitle, description, productSKU, productBarcode, productPrice, productSellPrice, category, tags, imageUrl };
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
