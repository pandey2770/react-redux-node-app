var express = require('express');

var app = express();

app.get('/api/tasks', function(req, res) {
  res.json([{
    des: 'task1', state: 'NEW'
  }, {
    des: 'task2', state: 'DONE'
  }]);
});

app.listen(3001, () => console.log("Server started on port 3001"));
