const express = require('express');
const { getallStartups , getStartup , createStartup , deleteStartup , upadteStartup } = require('../controller/startups');
const router = express.Router();
router.route('/').get(getallStartups).post(createStartup)
router.route('/:id').get(getStartup).delete(deleteStartup).patch(upadteStartup)

module.exports = router;