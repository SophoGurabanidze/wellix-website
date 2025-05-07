import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import completedProjectsRoutes from "./routes/completedProjects.js";
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import blogRoutes from "./routes/blog.js";




const app = express();
dotenv.config();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use("/api/completed-projects", completedProjectsRoutes);
app.use("/api/auth", authRoutes);
app.use("/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 1337;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ DB Error:", err));