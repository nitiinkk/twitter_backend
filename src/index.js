import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';
import Tweet from './models/tweet.js';
import Comment from './models/comment.js';
import TweetRepository from './repository/tweet-repository.js';
import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(3000, async () => {
    "server started..."
    await connect();
    console.log('mongodb connected successfully....')

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({ content: 'Hello world', userEmail: "a@gmail.com" });
    const comment = await Comment.create({ content: 'new comment' });
    tweet.comments.push(comment);
    tweet.save();
    //const tweet = await tweetRepo.getAll(0, 1)
    console.log("Email domain for current user is: " + tweet.domain);
    console.log(tweet);
})