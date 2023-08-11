import express, { urlencoded } from "express";
import tasks from "./routes/task.js";
export const app = express();
import 'dotenv/config';

// middleware
app.use(express.json());
app.use(urlencoded({extended:false}));

// midle ware for using routes
app.use('/api/vi/tasks', tasks);


