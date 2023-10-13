const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    }, 
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId, // A tweet can have multiple hashtags
        ref: 'Hashtag'
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