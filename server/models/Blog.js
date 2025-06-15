
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      ka: { type: String, required: true },
      en: { type: String, default: "" },
    },
    text: {
      ka: { type: String, required: true },
      en: { type: String, default: "" },
    },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
