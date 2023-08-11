import Task from "../models/task.js";
// here we are getting all

export const allTask = async (req, res) => {
  try {
    const task = await Task.find();
    if (!task)
      return res
        .status(400)
        .json({ message: "did not find the is in task data" });
    return res.status(201).json({task});
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// here we are creating task
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    if (!task)
      return res
        .status(400)
        .json({ message: "did not find the is in task data" });
    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// here we are getting one task
export const getTask = async (req, res) => {
  try {
    const { id: Taskid } = req.params;
    const task = await Task.findOne({ _id: Taskid });
    if (!task)
      return res
        .status(400)
        .json({ message: "did not find the is in task data" });
    res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// here we are updating task
export const updateTask = async (req, res) => {
  try {
    const { id: Taskid } = req.params;
    const task = await Task.findOneAndUpdate({ _id: Taskid }, req.body);
    if (!task) return res.status(400).json({ message: "Not updated" });
    res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// here we aredeleting task
export const deleteTask = async (req, res) => {
  try {
    const { id: Taskid } = req.params;
    const task = await Task.findOneAndDelete({ _id: Taskid });
    if (!task) return res.status(400).json({ message: "did not deleted" });
    res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
