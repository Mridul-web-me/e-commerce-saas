import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { couponTitle, couponCode, expiryDate } = await request.json();
    const newCoupon = { couponTitle, couponCode, expiryDate };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse(
      {
        message: 'Fail to create Coupon!'
      },
      { status: 500 }
    );
  }
}
