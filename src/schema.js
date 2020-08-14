const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    contact:{
        type:String,
        require: true,
    },

    details:{
        type: String,
        require: true
    }

});

module.exports = mongoose.model("contact", schema);