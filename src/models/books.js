const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id:{
        type: String,
        trim: true,
    },
    author:{
        type: String,
        trim: true,
    },
    name:{
        type: String,
        trim: true,
    },
    pages:{
        type: String,
        trim: true,
    },
    genre:{
        type : String,
        trim : true,
    }
});

module.exports = mongoose.model('Books',bookSchema);
