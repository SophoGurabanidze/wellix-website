import mongoose from "mongoose";

const CompletedProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  position: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  yearCompleted: String,
  labelOffsetY: { type: Number, default: 0 },
  labelOffsetX: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("CompletedProject", CompletedProjectSchema);


