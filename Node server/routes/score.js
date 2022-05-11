const express = require('express');
const router = express.Router();
const scoreCtrl = require('../controllers/score');

router.get('/allscores', scoreCtrl.getScores);

module.exports = router;