var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');


app.get('/', routes.home);


app.get('/listings', routes.listings);


app.get('/about', routes.about);


app.get('/contact', routes.contact);


app.get('*', routes.notFound);


app.listen(3000, function() {
  console.log('Oh my god, it is actually working!');
});
