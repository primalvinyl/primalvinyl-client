const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// add environment variables in develop environment
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
 
// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use(express.static(path.join(__dirname, 'client-app', 'build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'client-app', 'build', 'index.html')));

module.exports = app;
