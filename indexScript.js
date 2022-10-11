"use strict";

const express = require('express');
const app = express();
var mysqlRouter = require('./src/routes/home/mysql.js');


const home = require('./src/routes/home/indexRoute.js');

app.set("views", "./src/views");
app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/src'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);
app.use('/mysql', mysqlRouter);

module.exports = app;
