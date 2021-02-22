const mongoose = require('mongoose');

const housewifeSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    show: {
        type: String,
        required: true
    },
    birthday: {
        type: String
    },
    seasons: {
        type: [String],
        required: true
    },
    partner: {
        type: String
    },
    partners: {
        type: [String]
    },
    children: {
        type: [String]
    },
    likes: {
        type: [String]
    },
    dislikes: {
        type: [String]
    },
    taglines: {
        type: [String],
        required: true
    },
    memorable_moments_url: {
        type: String
    }
});


module.exports = mongoose.model('Housewife', housewifeSchema);