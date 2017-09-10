const DB = require("./db");

async function getAllTasks(query) {
  const tasks = await DB.get("SELECT * FROM tasks");
  return tasks;
}

module.exports = {
  getAllTasks
};
