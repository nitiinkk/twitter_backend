import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    }
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