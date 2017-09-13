'use strict';

var express = require('express');
var app = express();
var tasks = require('./src/tasks');

app.get('/api/tasks', function (req, res) {
  res.json(tasks.getAllTasks());
});
app.delete('/api/tasks', function (req, res) {
  res.json(tasks.delete());
});

app.put('/api/tasks', function (req, res) {
  res.json(tasks.put());
  console.log(put,'asd',tasks);
});

app.listen(3001, function () {
  return console.log("Server started on port 3001");
});
