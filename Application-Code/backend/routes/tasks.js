// routes/tasks.js
const express = require('express');
const router = express.Router();
const { getAllTasks, addTask, updateTask, deleteTask } = require('../models/tasks');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add a new task
router.post('/', async (req, res) => {
  const { task, completed } = req.body;
  try {
    const newTask = await addTask(task, completed);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const updatedTask = await updateTask(id, completed);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await deleteTask(id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
