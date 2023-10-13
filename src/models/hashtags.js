import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    tweets: [{
        type: mongoose.Schema.Types.ObjectId, // A hashtag can have multiple tweets
        ref: 'Tweet'
    }]
}, { timestamps: true });

hashtagSchema.pre('save', function (next) {
    this.title = this.title.toLocaleLowerCase();
    next();
})

const Hashtag = mongoose.model('hastag', hashtagSchema);

export default Hashtag;