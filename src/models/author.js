const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
   
    name:{
        type: String,
        trim: true,
    },
    caionality:{
        type: String,
        trim: true,
    },
    bornDay:{
        type: String,
        trim: true,
    },
    bornMoth:{
        type: String,
        trim: true,
    },
    bornYear:{
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Author',authorSchema);