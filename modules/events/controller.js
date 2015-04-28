var Event = require('./model');

function create (req, res, cb){
  Event.create(req, res, cb);
}

function retrieve (req, res, cb){
  Event.retrieve(req, res, cb);
}

function retrieveById (req, res, cb){
  Event.retrieveById(req, res, cb);
}

function update (req, res, cb){
  Event.update(req, res, cb);
}

function remove (req, res, cb){
  Event.remove(req, res, cb);
}

module.exports = {
  create: create,
  retrieve: retrieve,
  retrieveById: retrieveById,
  update: update,
  remove: remove
}