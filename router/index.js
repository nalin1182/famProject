const express =require('express');
const router = express.Router();

router.use('/videos',require('./getVideosData'));

module.exports = router;