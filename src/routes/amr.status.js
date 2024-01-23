var express = require('express');
var router = express.Router();
const Controler = require(`${__dirname}/../controllers/status.controller.js`)

router.get('/', Controler.status) 

module.exports = router;