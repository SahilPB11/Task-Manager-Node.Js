import { app } from "./app.js";
import { connect } from "./db/connect.js";
const Port = process.env.Port;

// here we are checking that that our database is connected then we will start our server
const connected = async () => {
  try {
    await connect().then(() => {
      app.listen(Port, () => console.log(`Server is listening on ${Port}`));
    });
  } catch (err) {
    console.log(err.message);
  }
};

connected();



