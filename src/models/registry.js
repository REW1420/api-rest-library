const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrySchema = new Schema({
    id:{
        type: String,
        trim: true,
    },
    user:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
    },
    password:{
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Registry',registrySchema);
