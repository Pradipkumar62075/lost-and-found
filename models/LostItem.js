// models/LostItem.js
import mongoose from "mongoose";

const LostItemSchema = new mongoose.Schema({
  itemName: String,
  description: String,
  location: String,
  date: String,
});

export default mongoose.models.LostItem || mongoose.model("LostItem", LostItemSchema);
