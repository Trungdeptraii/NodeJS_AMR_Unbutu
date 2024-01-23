var express = require('express');
var router = express.Router();
const Config = require(`${__dirname}/../controllers/push.controller.js`)

router.get('/', (req, res)=>{
    res.send('config')
}) 

module.exports = router;