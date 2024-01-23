var express = require('express');
var router = express.Router();
const Navigation = require(`${__dirname}/../controllers/navigation.controller.js`)

router.post('/', Navigation.navigation) 
router.post('/type_nav', Navigation.typeNav) 
router.get('/', Navigation.index)

module.exports = router;