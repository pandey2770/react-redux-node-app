var express = require('express');
var app = express();
var tasks = require('./src/tasks');

app.get('/api/tasks', async (req, res) => {
  const taskList = await tasks.getAllTasks();
  res.json(taskList);
});

app.delete('/api/tasks/:id', async (req, res) => {
  await tasks.deleteTask(req.params.id);
  res.json({ id: req.params.id });
});
app.put('/api/tasks/:id', async (req, res) => {
  await tasks.doneTasks(req.params.id);
  res.json({ id: req.params.id });
});
app.listen(3001, () => console.log("Server started on port 3001"));
