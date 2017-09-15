const DB = require("./db");

async function getAllTasks() {
  const tasks = await DB.get("SELECT * FROM tasks");
  return tasks;
}

async function deleteTask(id) {
  const query = {
    text: "DELETE FROM tasks WHERE id = $1",
    values: [ id ],
  };
  return await DB.mutate(query);
}

async function createTask(task) {
  const query = {
    text: "INSERT INTO tasks VALUES($1, $2, $3)",
    values: [ task.id, task.des, task.state ],
  };
  return await DB.mutate(query);
}

async function updateTask(id, state) {
  const query = {
    text: "UPDATE tasks SET state = $1 WHERE id = $2",
    values: [ state, id ],
  };
  return await DB.mutate(query);
}

module.exports = {
  getAllTasks,
  deleteTask,
  updateTask,
  createTask
};
