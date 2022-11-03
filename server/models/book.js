let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contactname: String,
    contactnumber: String,
    emailaddress: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Book', contactModel);