const Task = require("../models/Task");

// GET all
exports.getTasks = async (req, res, next) => {
try {
const tasks = await Task.find();
res.json(tasks);
} catch (err) {
next(err);
}
};

// GET single
exports.getTask = async (req, res, next) => {
try {
const task = await Task.findById(req.params.id);
if (!task) return res.status(404).json({ message: "Not found" });
res.json(task);
} catch (err) {
next(err);
}
};

// CREATE
exports.createTask = async (req, res, next) => {
try {
const task = await Task.create(req.body);
res.status(201).json(task);
} catch (err) {
next(err);
}
};

// UPDATE
exports.updateTask = async (req, res, next) => {
try {
const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(task);
} catch (err) {
next(err);
}
};

// DELETE
exports.deleteTask = async (req, res, next) => {
try {
await Task.findByIdAndDelete(req.params.id);
res.json({ message: "Deleted successfully" });
} catch (err) {
next(err);
}
};