'use strict';

var express = require('express');
var app = express();
var tasks = require('./src/tasks');

app.get('/api/tasks', function (req, res) {
  res.json(tasks.getAllTasks());
});

app.listen(3001, function () {
  return console.log("Server started on port 3001");
});
