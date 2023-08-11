import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Munst provide end name"],
    trim: true,
    maxlength: [20, "Name can not be more then 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Task = mongoose.model("Task", TaskSchema);

export default Task;
