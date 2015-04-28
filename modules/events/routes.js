var express = require('express');
var router = express.Router();
var eventCtrl = require('./controller');
var cb = require('../../core/cb_default');

/* GET event listing. */
router.get('/', function(req, res) {
  eventCtrl.retrieve(req, res, cb);
});

/* GET event retrive by id. */
router.get('/:id', function(req, res) {
  eventCtrl.retrieveById(req, res, cb);
});

/* POST event create. */
router.post('/', function(req, res) {
  eventCtrl.create(req, res, cb);
});

/* PUT event edit by id. */
router.put('/:id', function(req, res) {
  eventCtrl.update(req, res, cb);
});

/* DELETE event delete by id. */
router.delete('/:id', function(req, res) {
  eventCtrl.remove(req, res, cb);
});

/*
 * Exports router
 */
module.exports = router;