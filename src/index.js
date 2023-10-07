const express = require('express');
const app = express();
const connect = require('./config/database');

const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async () => {
    "server started..."
    await connect();
    console.log('mongodb connected successfully....')
    // const tweet = await Tweet.create({
    //     content: "hello world",
    //     userEmail: 'a@gmail.com'
    // });

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'Hello world', userEmail: "a@gmail.com"});
    console.log(tweet);
})