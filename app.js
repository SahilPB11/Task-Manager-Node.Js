import express, { urlencoded } from "express";
import tasks from "./routes/task.js";
export const app = express();
import "dotenv/config";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/api/v1/tasks', tasks);


// here we are handling the error 
app.use(errorMiddleware);