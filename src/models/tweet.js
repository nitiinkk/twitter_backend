import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    likes: [{  //tweet can be liked by multiple people
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }]
}, { timestamps: true });

tweetSchema.virtual('domain').get(function getEmailDomain() {
    return this.userEmail.slice(this.userEmail.indexOf('@') + 1);
})

//hooks
tweetSchema.pre('save', function (next) {
    console.log("inside hook")
    next()
})

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;