import mongoose from "mongoose";

const FoundItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  date: { type: String },
}, {
  timestamps: true
});

export default mongoose.models.FoundItem || mongoose.model("FoundItem", FoundItemSchema);
