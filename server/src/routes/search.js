const express = require('express');
const { errorHandler } = require('../utilities');
const geniusSearch = require('../remoteApi/geniusSearch');

const router = express.Router();

router.get('/:query', (req, res) => {
    const searchQuery = req.params.query;
    geniusSearch(searchQuery)
        .then(response => res.json(response))
        .catch(error => res.status(404).json(errorHandler('Nothing found', error)).end());
});

module.exports = router;
