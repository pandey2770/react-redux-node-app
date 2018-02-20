const uuidv1 = require("uuid/v1");
const DB = require("./db");

async function getAllTasks(id) {
  const query = {
    text: "SELECT * FROM tasks WHERE id = $1",
    values: [id]
  };
  const task = await DB.get(query);
  return task;
 }
async function deleteTask(id, des) {
  const query = {
    text: "DELETE FROM tasks WHERE id = $1 and des = $2",
    values: [ id, des ],
  };
  return await DB.mutate(query);
}

async function createTask(id,task) {
  const query = {
    text: "INSERT INTO tasks (id,des,state) VALUES($1, $2, $3)",
    values: [ id, task.des, task.state ],
  };
  await DB.mutate(query);
  return id;
}

async function updateTask(id, des ,state) {
  const query = {
    text: "UPDATE tasks SET state = $3 WHERE id = $1 and des= $2 ",
    values: [ id, des, state ],
  };
  return await DB.mutate(query);
}

module.exports = {
  getAllTasks,
  deleteTask,
  updateTask,
  createTask
};
