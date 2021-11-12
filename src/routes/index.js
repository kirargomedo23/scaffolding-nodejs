const express = require('express');
const Utils = require('../utils/response');
const router = express.Router();


router.get('/', function(req, res) {
    Utils.dataResponse(res);
    return;
});

module.exports = router;