const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    passwordHash: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);