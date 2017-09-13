const DB = require("./db");

async function getAllTasks() {
  const tasks = await DB.get("SELECT * FROM tasks");
  return tasks;
}

async function deleteTask(id) {
  const query = {
    text: "DELETE FROM tasks where id = $1",
    values: [ id ],
  };
  return await DB.mutate(query);
}

async function updateTask(id, state) {
  const query = {
    text: "UPDATE tasks set state = $1 where id = $2",
    values: [ state, id ],
  };
  return await DB.mutate(query);
}

module.exports = {
  getAllTasks,
  deleteTask,
  updateTask
};
