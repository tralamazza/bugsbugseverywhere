var path = require('path');
var express = require('express');

var app = express();

app.configure(function() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'run to the hills, run for your lives', cookie: { maxAge: 60000 } }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
  res.render('index', { signed: req.session.signed });
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', function(req, res) {
  req.session.signed = true;
  res.redirect('/');
});

app.get('/logout', function(req, res) {
  req.session.signed = false;
  res.redirect('/login');
});

app.listen(8080);
