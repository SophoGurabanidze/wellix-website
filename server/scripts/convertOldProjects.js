// scripts/convertOldProjects.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import CompletedProject from "../models/CompletedProject.js";

dotenv.config();

async function runMigration() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const projects = await CompletedProject.find({ "title": { $type: "string" } });

    for (const project of projects) {
      project.title = { ka: project.title, en: "" };
      project.description = { ka: project.description || "", en: "" };
      await project.save();
    }

    console.log("✅ Migration complete. Projects updated.");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Migration failed:", err);
  }
}

runMigration();
