const express = require('express');
const {totalStartups} = require('../controller/startups');
const router = express.Router();
router.route('/').get(totalStartups)

module.exports = router;