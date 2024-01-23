var express = require('express');
var router = express.Router();
const Other = require(`${__dirname}/../controllers/push.controller.js`)

router.get('/', (req, res)=>{
    res.send('Other')
}) 

module.exports = router;