import Task from "../models/task.js";
import errorHandler from "../middlewares/errorhandler.js";
// here we are getting all

export const getAllTask = async (req, res, next) => {
  try {
    const task = await Task.find();
    if (!task)
      return next(new errorHandler("did not find the is in task data", 400));
    return res.status(201).json({ task });
  } catch (err) {
    next(err);
  }
};

// here we are creating task
export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    if (!task)
      return next(new errorHandler("did not find the is in task data", 400));
    return res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// here we are getting one task
export const getTask = async (req, res, next) => {
  try {
    const { id: Taskid } = req.params;
    const task = await Task.findOne({ _id: Taskid });
    if (!task)
      return next(new errorHandler("did not find the is in task data", 400));
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

// here we are updating task
export const updateTask = async (req, res, next) => {
  try {
    const { id: Taskid } = req.params;
    const task = await Task.findOneAndUpdate({ _id: Taskid }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return next(new errorHandler("Not updated", 400));
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

// here we aredeleting task
export const deleteTask = async (req, res, next) => {
  try {
    const { id: Taskid } = req.params;
    const task = await Task.findOneAndDelete({ _id: Taskid });
    if (!task) return next(new errorHandler("did not deleted", 400));
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};
