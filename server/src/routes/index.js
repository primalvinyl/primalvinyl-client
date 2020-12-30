const express = require('express');
const router = express.Router();

router.all('/*', (req, res) => res.sendStatus(403).end());

module.exports = router;
