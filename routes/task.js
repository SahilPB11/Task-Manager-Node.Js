import express from "express"
import { getTask } from "../controlers/tasks.js";

const tasks = express.Router();

tasks.route('/').get(getTask)

export default tasks;