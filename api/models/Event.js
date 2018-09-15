const mongoose = require('mongoose');

const { Schema } = mongoose;

const Event = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Event', Event);