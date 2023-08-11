import mongoose from "mongoose";
const connectionString = process.env.Mongo_Uri

export async function connect() {
  try {
    // Await for the mongoose connection
    const isit = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
