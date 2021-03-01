const express = require('express');
const { errorHandler } = require('../utilities');
const geniusSearchSong = require('../remoteApi/geniusSearchSong');
const geniusGetSong = require('../remoteApi/geniusGetSong');

const router = express.Router();

//search for songs
router.get('/search/:query', (req, res) => {
    const searchQuery = req.params.query;
    geniusSearchSong(searchQuery) 
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Song not found', error)).end());
});

//get song
router.get('/:id', (req, res) => {
    const songId = req.params.id;
    geniusGetSong(songId)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Song not found', error)).end());
});

module.exports = router;
