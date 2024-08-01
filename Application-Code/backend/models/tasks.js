// models/tasks.js
const { connection } = require('../db');

// Get all tasks
const getAllTasks = async () => {
  const [rows] = await connection.query('SELECT * FROM tasks');
  return rows;
};

// Add a new task
const addTask = async (task, completed) => {
  const [result] = await connection.query('INSERT INTO tasks (task, completed) VALUES (?, ?)', [task, completed]);
  return { id: result.insertId, task, completed };
};

// Update a task
const updateTask = async (id, completed) => {
  await connection.query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id]);
  return { id, completed };
};

// Delete a task
const deleteTask = async (id) => {
  await connection.query('DELETE FROM tasks WHERE id = ?', [id]);
  return { id };
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
};
