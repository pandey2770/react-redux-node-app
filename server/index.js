var express = require('express');
var app = express();
var tasks = require('./src/tasks');

app.get('/api/tasks', async (req, res) => {
  const taskList = await tasks.getAllTasks();
  res.json(taskList);
});

app.listen(3001, () => console.log("Server started on port 3001"));
