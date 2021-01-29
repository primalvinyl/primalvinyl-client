const express = require('express');
const { errorHandler } = require('../utilities');
const searchArtist = require('../remoteApi/discogsSearchArtist');
const getArtist = require('../remoteApi/discogsGetArtist');

const router = express.Router();

//return list of artists
router.get('/search/:name', (req, res) => {
    const artistName = req.params.name;
    searchArtist(artistName)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Artist not found', error)).end());
});

//return artist
router.get('/:id', (req, res) => {
    const artistId = req.params.id;
    getArtist(artistId)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Artist not found', error)).end());
});

module.exports = router;

