import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./tasksRepository";

const app = express();

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: error.message });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = await createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Failed to create task", error: error.message });
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body);
    res.status(200).json(task);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Failed to update task", error: error.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await deleteTask(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Failed to delete task", error: error.message });
  }
});

app.listen(3000);
