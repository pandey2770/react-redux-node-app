var passport = require('passport');
var cookieParser = require('cookie-parser')
var session = require("express-session");
var User = require('./src/user');
var express = require('express');
var app = express();
var tasks = require('./src/tasks');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var app = express();
  app.use(express.static("public"));
  app.use(session({
    secret: 'ssdn',
    resave: false,
    saveUninitialized: true
  }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
  app.use(bodyParser.raw());
  require('./src/auth.js');

  app.post('/api/signUp',  async (req, res) => {
    try {
      const data = await User.signUp(req.body.name,req.body.username,req.body.password);
      passport.authenticate('local')(req, res, function () {
        res.sendStatus(200);
      });
    } catch(exp) {
      if (exp.constraint === 'usertable_email_key') {
        res.status(400).jsonp({ error: 'Email is already registered.'});
      } else {
        res.sendStatus(500);
      }
    }
  });


  app.post('/api/login',
    passport.authenticate('local'),
    function(req, res) {
      res.sendStatus(200);
  }
  );

  app.get('/api/user', (req, res) => {
    res.json(req.user);
  });

  app.get('/api/logout', function(req, res){
    req.logout(); 
    res.sendStatus(200);
  });


  app.get('/api/tasks', async (req, res) => {
    const taskList = await tasks.getAllTasks(req.user.id);
    res.json(taskList);
  });

  app.delete('/api/tasksDelete/:id', async (req, res) => {
    await tasks.deleteTask(req.user.id,req.params.id);
    res.json({ id:req.user.id });
  });

  app.post('/api/tasks', (req, res) => {
    const taskId = tasks.createTask(req.user.id,req.body.task);
    res.json(taskId);
  });

  app.put('/api/tasks', async (req, res) => {
    await tasks.updateTask(req.user.id, req.body.id,req.body.state);
    res.json({ id: req.user.id });
  });

  app.post('/api/forget' , async (req,res) =>{
    console.log(req.body)
  })

  app.listen(3001, () => console.log("Server started on port 3001"));
