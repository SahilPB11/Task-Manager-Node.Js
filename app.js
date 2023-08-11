import express from "express";
const Port = 3000;
const app = express();

// routes testing server
app.get('/', (req, res) => {
    res.send("task manager is working properly")
})

app.listen(Port, (err) => {
    if(err) return console.log(err.message);
    console.log("server is working properly on " + Port);
})
