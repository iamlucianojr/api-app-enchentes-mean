/*
 * require model of core
 */
var createModel = require('../../core/model');
var schema;

/*
 * Objct config schema
 */
schema = {
    title:          { type: "String", default: "Title"},
    description:    { type: "String", default: "Description"},
    type:           { type: "String", default: "Type"},
    latitude:       { type: "String", default: "Lat"},
    longitude:      { type: "String", default: "Long"},
    create_at:      { type: "String", default: "Create_at"},
    update_at:      { type: "String", default: "Update_at"}

};

/*
 * Exports new model
 */
module.exports = createModel('Event', schema);