const uuidv1 = require("uuid/v1");
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
  const id = uuidv1();
  const query = {
    text: "INSERT INTO tasks VALUES($1, $2, $3)",
    values: [ id, task.des, task.state ],
  };
  await DB.mutate(query);
  return id;
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
