var express = require('express');
var router = express.Router();
const Push = require(`${__dirname}/../controllers/push.controller.js`)

router.get('/', (req, res)=>{
    res.send('push')
}) 

module.exports = router;