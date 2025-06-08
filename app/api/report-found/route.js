import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import FoundItem from '@/models/FoundItem';

export async function POST(req) {
  console.log("API ROUTE HIT");

  try {
    const body = await req.json();

    await mongoose.connect('mongodb://127.0.0.1:27017/lostandfound');

    const newItem = new FoundItem(body);
    await newItem.save();

    return NextResponse.json({ message: "Item reported successfully" }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
}
