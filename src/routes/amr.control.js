var express = require('express');
var router = express.Router();
const Control = require(`${__dirname}/../controllers/control.controller.js`)

router.get('/', Control.index);
router.post('/', Control.handleIndex)
router.post('/monitor', Control.monitor)
router.get('/monitor', Control.handleMonitor)

module.exports = router;