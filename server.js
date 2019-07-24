var express = require('express');
var app = express();
// var session = require("express-session")({
//    secret: "my-secret",
//    resave: true,
//    saveUninitialized: true
// });
// const flash = require('express-flash');
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcrypt');

// app.use(session);
// app.use(flash());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static( __dirname + '/public/dist/public' ));

app.set('views', path.join(__dirname, './client/views'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000);
