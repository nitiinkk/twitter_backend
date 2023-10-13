import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }

    async getWithComments(id) {
        try {
            const tweet = Tweet.findById(id).populate({ path: 'comments' });
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