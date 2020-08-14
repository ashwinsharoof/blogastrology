const mongoose = require('mongoose')

const homeschema = mongoose.Schema({
    image: {
        type: String
    },
     heading: {
        type: String
    },
    content: {
        type: String
    }
    
})

module.exports = mongoose.model('home', homeschema)