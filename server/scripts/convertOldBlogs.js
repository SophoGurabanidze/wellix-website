
import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "../models/Blog.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function convertBlogs() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const oldBlogs = await Blog.find({ "title": { $type: "string" } });

    for (const blog of oldBlogs) {
      const updated = await Blog.updateOne(
        { _id: blog._id },
        {
          $set: {
            title: { ka: blog.title, en: "" },
            text: { ka: blog.text, en: "" },
          },
        }
      );
      console.log(`Updated blog ${blog._id}`);
    }

    await mongoose.disconnect();
    console.log("Done. Disconnected.");
  } catch (error) {
    console.error("Error updating blogs:", error);
    process.exit(1);
  }
}

convertBlogs();
