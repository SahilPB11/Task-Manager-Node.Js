import { app } from "./app.js";
import { connect } from "./db/connect.js";
const Port = 3000;

// here we are checking that that our database is connected then we will start our server
connect().then(() => {
  app.listen(Port, (err) => {
    if (err) return console.log(err.message);
    console.log("server is working properly on " + Port);
  });
});

const connected = async() => {
    try{
        connect.then(() => {
            app.listen(Port, () => console.log(`Server is listening on ${Port}`))
        })
       } catch(err){
        console.log(err.message);
    }
}