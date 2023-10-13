const mongoose = require('mongoose');

const hashtagSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [{
        type: mongoose.Schema.Types.ObjectId, // A hashtag can have multiple tweets
        ref: 'Tweet'
    }]
}, {timestamps: true})

const Hashtag = mongoose.model('hastag', hashtagSchema);

module.exports = Hashtag;