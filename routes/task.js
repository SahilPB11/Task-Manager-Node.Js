import express from "express";
import {
  getTask,
  deleteTask,
  allTask,
  updateTask,
  createTask,
} from "../controlers/tasks.js";

const tasks = express.Router();

tasks.route("/").get(allTask).post(createTask);
tasks.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default tasks;
