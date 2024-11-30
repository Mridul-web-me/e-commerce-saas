import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const POST = async request => {
  try {
    const body = await request.json();
    const { couponTitle, couponCode, expiryDate, isActive } = body;

    if (!couponTitle || !couponCode || !expiryDate || typeof isActive !== 'boolean') {
      return NextResponse.json({ error: 'Invalid input: All fields are required.' }, { status: 400 });
    }

    const parsedDate = new Date(expiryDate);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format for expiryDate.' }, { status: 400 });
    }

    const newCoupons = await prismadb.coupons.create({
      data: {
        couponTitle,
        couponCode,
        expiryDate: parsedDate,
        isActive
      }
    });

    return NextResponse.json(newCoupons);
  } catch (err) {
    console.error('Error creating coupon:', err);
    return NextResponse.json({ message: 'Coupons post error', error: err.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const coupons = await prismadb.coupons.findMany();
    return NextResponse.json(coupons);
  } catch (err) {
    return NextResponse.json({ message: 'GET error', err }, { status: 500 });
  }
};
