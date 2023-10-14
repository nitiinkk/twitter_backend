import { TweetRepository, LikeRepository } from '../repository/index';

class LikeService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.likeRepository = new LikeRepository();
    }

    //modelId will be Id of Tweet/Comment
    //modelType: Tweet/Comment
    // /api/v1/likes/toggle?id=modelid&type=Tweet
    async toggleLike(modelId, modelType, userId) {
        try {
            if (modelType == 'tweet') {
                var likeable = await this.tweetRepository.find(modelId);
            } else if(modelType == 'comment') {
                //TODO
            } else {
                throw new Error('unknown model type');
            }

            const exists = await this.likeRepository.findByUserAndLikeable({ //like objectId
                onModel: modelType,
                likeable: modelId,
                user: userId
            });
            
            //if like exist remove it , else add it.
            if(exists) {
                likeable.likes.pull(exists.id); //pulls like from the likes array
                await likeable.save();
                await exists.remove(); //removing likes from collection
                var isAdded = false;
            } else {
                const newLike = await this.likeRepository.create({
                    onModel: modelType,
                    likeable: modelId,
                    user: userId
                });
                likeable.likes.push(newLike.id);
                await likeable.save();
                isAdded = true;
            }
            return isAdded;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default LikeService;