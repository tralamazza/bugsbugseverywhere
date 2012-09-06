var path = require('path');
var express = require('express');

var app = express();

app.locals.signed = false;

app.configure(function() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', function(req, res) {
  app.locals.signed = true;
  res.redirect('/');
});

app.get('/logout', function(req, res) {
  app.locals.signed = false;
  res.redirect('/login');
});

app.listen(8080);
