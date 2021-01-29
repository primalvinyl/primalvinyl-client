const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const corsCheck = require('./logic/corsCheck');
const songsRouter = require('./routes/songs');
const artistsRouter = require('./routes/artists');
const defaultRouter = require('./routes');

// add environment variables from .env to development and test environments
if (process.env.node_env !== 'production') {
    require('dotenv').config();
}

// instantiate express application
const app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'build')));
app.use(cookieParser());
app.use(corsCheck());

// api routes
app.use('/api/songs', songsRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/*', defaultRouter);

// route to react application
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../', 'build', 'index.html')));

module.exports = app;
