const express = require('express');
const app = express();
const connect = require('./config/database');

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async () => {
    "server started..."
    await connect();
    console.log('mongodb connected successfully....')
    
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'Hello world', userEmail: "a@gmail.com"});
    const comment = await Comment.create({content: 'new comment'});
    tweet.comments.push(comment);
    tweet.save();
    //const tweet = await tweetRepo.getAll(0, 1)
    console.log("Email domain for current user is: " + tweet.domain);
    console.log(tweet);
})