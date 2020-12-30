const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const corsCheck = require('./logic/corsCheck');
const artistsRouter = require('./routes/artists');

// add environment variables in development and test environments
if (process.env.node_env !== 'production') {
    require('dotenv').config();
}

const app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('../build'));
app.use(cookieParser());
app.use(corsCheck());

// routes
app.use('/artists', artistsRouter);
app.get('/*', (req, res) => res.sendFile('../build', 'index.html'));

module.exports = app;
