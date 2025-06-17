import express from "express";
import CompletedProject from "../models/CompletedProject.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await CompletedProject.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const project = new CompletedProject(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const updated = await CompletedProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    await CompletedProject.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await CompletedProject.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;