import { TweetRepository, HashTagRepository } from '../repository/index';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashTagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+g/)
            .map((tag) => tag.substring(1).toLowerCase())

        const tweet = await this.tweetRepository.create(data);
        const alreadPresentTags = this.hashTagRepository.findByName(tags);
        let titleOfPresentTags = alreadPresentTags.map(tags => tags.title);
        let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
        newTags.map((tag) => {
            return {
                title: tag,
                tweets: [tweet.id]
            }
        });
        await this.hashTagRepository.bulkCreate(newTags);
        alreadPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

}

export default TweetService;