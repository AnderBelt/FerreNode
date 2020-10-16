const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    producto: {
        type: String,
        require: true,
    },
    codigo: {
        type: Number,
        require: true,
    },
    descripcion: {
        type: String,
        require: true,
    },
    precio: {
        type: Number,
        require: true,
    },

    date: Date,    
});

const model = mongoose.model('Message', mySchema);
module.exports = model;