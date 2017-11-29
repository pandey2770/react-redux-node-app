var express = require('express');
var app = express();
var tasks = require('./src/tasks');
var recodr = require('./src/recodr');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/tasks', async (req, res) => {
  const taskList = await tasks.getAllTasks();
  res.json(taskList);
});

app.get('/api/recodr', async (req, res) => {
  const recodrList = await recodr.getAllRecodr();
  res.json(recodrList);
});

app.delete('/api/tasks/:id', async (req, res) => {
  await tasks.deleteTask(req.params.id);
  res.json({ id: req.params.id });
});

app.post('/api/tasks', (req, res) => {
  const taskId = tasks.createTask(req.body.task);
  res.json(taskId);
});

app.post('/api/recodr', (req, res) => {
  const recodrId = recodr.createRecodr(req.body.recodr);
  res.json(recodrId);
});

app.put('/api/tasks/:id', async (req, res) => {
  await tasks.updateTask(req.params.id, req.body.state);
  res.json({ id: req.params.id });
});

app.listen(3001, () => console.log("Server started on port 3001"));
