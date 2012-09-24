var path = require('path');
var express = require('express');

var app = express();

app.configure(function() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.cookieParser('run to the hills, run for your lives'));
  app.use(express.bodyParser());
  app.use(express.session());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
  res.render('index', { signed: req.session.signed });
});

app.get('/login', function(req, res) {
  console.log(req.session);
  if (req.session.signed)
    res.redirect('/');
  else
    res.render('login');
});

app.post('/login', function(req, res) {
  if (req.body.password === 'bugbuster')
    req.session.signed = true;
  res.redirect('/');
});

app.get('/logout', function(req, res) {
  req.session.signed = false;
  res.redirect('/login');
});

app.listen(8080);
