const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const songsRouter = require('./routes/songs');
const artistsRouter = require('./routes/artists');
const defaultRouter = require('./routes');

// add environment variables from .env to development and test environments
if (process.env.node_env !== 'production') {
    require('dotenv').config();
}

// set-up cors
const corsWhitelist = process.env.cors_origin ? process.env.cors_origin.split(',') : [];
const corsOptions = {
    origin: (origin, callback) => {
        if (corsWhitelist.indexOf(origin) !== -1 || !origin) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
    optionsSuccessStatus: 200
}

// instantiate express application
const app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'build')));
app.use(cookieParser());
app.use(cors(corsOptions));

// api routes
app.use('/api/songs', songsRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/*', defaultRouter);

// route to react application
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../', 'build', 'index.html')));

module.exports = app;
