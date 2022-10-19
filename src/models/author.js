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
    bornDate:{
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Author',authorSchema);