var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const mongodb = require('./db/connect');

var cars = require('./routes/cars');
var employees = require('./routes/employees');
var renters = require('./routes/renters');
var stores = require('./routes/stores');

var app = express();

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } 
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', cars);
app.use('/', employees);
app.use('/', renters);
app.use('/', stores);

module.exports = app;