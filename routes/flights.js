var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.post('/', flightsCtrl.create);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);

module.exports = router;
