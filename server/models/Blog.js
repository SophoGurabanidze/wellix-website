import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  text: String,
  image: String,
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
