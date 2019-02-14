var express = require('express');
var mustache = require('mustache-express');
var port = process.env.PORT || 3000;
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));

var eventController = require('./controllers/eventContrroller');
var guestController = require('./controllers/guestController');
app.use('/events', eventController);
app.use('/guests', guestController);

var session = require('express-session')
app.use(session({
  secret: 'where in the world is carmen san diego',
  resave: true,
  saveUninitialized: true
}));

app.listen(port, function () {
  console.log('listening on port:' + port);
});
