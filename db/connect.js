import mongoose from "mongoose";
const connectionString =
  "mongodb+srv://SahilDb:niT7vVP7xXKiXeSj@cluster0.pktzlj5.mongodb.net/?retryWrites=true&w=majority";

export async function connect() {
  try {
    // Await for the mongoose connection
    const isit = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useUnifiedTopology:false
    });
    // Log a success message with the host name
    if (isit)
      return console.log(
        `database is connected successfully with ${isit.connection.host}`
      );
  } catch (err) {
    // Log an error message if the connection fails
    console.error("Failed to connect to MongoDB", err);
  }
}
