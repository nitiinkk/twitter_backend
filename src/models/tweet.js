const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail : {
        type: String
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }]
}, {timestamps: true});

tweetSchema.virtual('domain').get(function getEmailDomain() {
    return this.userEmail.slice(this.userEmail.indexOf('@')+1);
})

//hooks
tweetSchema.pre('save', function (next) {
    console.log("inside hook")
    next()
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;