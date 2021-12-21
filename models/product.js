const mongoose = require('mongoose')

const product = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

})

module.exports = mongoose.model('fileupload', product)