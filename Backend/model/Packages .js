import mongoose from "mongoose";

const Package = new mongoose.Schema({
  title: { type: String },
  days: { type: Number },
  amount: { type: Number },
  description: { type: String },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("Package", Package);