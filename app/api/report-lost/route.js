import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import LostItem from '@/models/LostItem'; // your model

export async function POST(req) {
  console.log("API ROUTE HIT "); // Log when route is hit

  try {
    const body = await req.json();

    await mongoose.connect('mongodb://127.0.0.1:27017/lostandfound');

    const newItem = new LostItem(body);
    await newItem.save();

    return NextResponse.json({ message: "Item reported successfully " }, { status: 200 });
  } catch (error) {
    console.error(" API Error:", error);
    return NextResponse.json({ message: "Server Error", error }, { status: 500 });
  }
}
