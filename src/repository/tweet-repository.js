import Tweet from '../models/tweet.js';

class TweetRepository {
    async create(data) {
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tweet = Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = Tweet.findById(id).populate({ path: 'comments' });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    // async update(tweetId, data) {
    //     try {
    //      const tweet = Tweet.findByIdAndUpdate(tweetId, data, {new: true}).lean(); //lean return a js object instead of mongodb object
    //      return tweet;   
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async destroy(id) {
        try {
            const tweet = Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = Tweet.find().skip(offset).limit(limit); //offset and limit
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}

export default TweetRepository;