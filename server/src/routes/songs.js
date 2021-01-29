const express = require('express');
const { errorHandler } = require('../utilities');
const searchSong = require('../remoteApi/geniusSearchSong');
const getSong = require('../remoteApi/geniusGetSong');

const router = express.Router();

//return list of songs
router.get('/search/:query', (req, res) => {
    const searchQuery = req.params.query;
    searchSong(searchQuery)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Song not found', error)).end());
});

//return song
router.get('/:id', (req, res) => {
    const songId = req.params.id;
    getSong(songId)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Song not found', error)).end());
});

module.exports = router;
