const mongoose = require("mongoose");

const loginschema = mongoose.Schema({
    Email: {
        required: true,
        type: String,
    },
    Password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('login', loginschema)