const express = require('express');
const router = express.Router();

const controllers = require('../controllers/getVideoController');

router.get('/data',controllers.fetchData);

module.exports = router;