// app/api/search/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import FoundItem from "@/models/FoundItem";

export async function POST(req) {
  try {
    const { searchTerm, location, date } = await req.json();

    await mongoose.connect("mongodb://127.0.0.1:27017/lostandfound");

    let query = {};
    if (searchTerm) query.itemName = { $regex: searchTerm, $options: "i" };
    if (location) query.location = { $regex: location, $options: "i" };
    if (date) query.date = date;

    const results = await FoundItem.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ items: results });
  } catch (error) {
    console.error("Search Error:", error);
    return NextResponse.json({ message: "Error fetching search results", error }, { status: 500 });
  }
}
