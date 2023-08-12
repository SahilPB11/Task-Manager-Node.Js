import express from "express";
import {
  getTask,
  deleteTask,
  getAllTask,
  updateTask,
  createTask,
} from "../controlers/tasks.js";

const tasks = express.Router();

tasks.route("/").get(getAllTask).post(createTask);
tasks.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default tasks;
