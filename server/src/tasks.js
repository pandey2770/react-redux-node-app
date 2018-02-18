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
async function deleteTask(id) {
  const query = {
    text: "DELETE FROM tasks WHERE id = $1",
    values: [ id ],
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
// async function deleteFromCatr (id, userid  ) {
//   const state='addCart';
//   const query = {
//     text : "DELETE FROM cart WHERE id=$1 and productid=$2 and state=$3 ",
//     values: [ id, userid, state ]
//   }
//   const data = await DB.mutate(query);
//   return data;
// }
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
