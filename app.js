import express, { urlencoded } from "express";
import tasks from "./routes/task.js";
const Port = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(urlencoded({extended:false}));

// midle ware for using routes
app.use('/api/vi/tasks', tasks);

app.listen(Port, (err) => {
    if(err) return console.log(err.message);
    console.log("server is working properly on " + Port);
})
