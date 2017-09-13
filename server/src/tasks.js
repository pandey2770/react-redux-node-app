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

async function doneTasks(id) {
  const query = {
    text: "UPDATE tasks set state = 'DONE' where id = $1",
    values: [ id ],
  };
  return await DB.mutate(query);
}
async function undoneTasks(id) {
  const query = {
    text: "UPDATE tasks set state = 'UNDONE' where id = $1",
    values: [ id ],
  };
  return await DB.mutate(query);
}
module.exports = {
  getAllTasks,
  deleteTask,
  doneTasks,
  undoneTasks
};
