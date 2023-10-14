import {CommentRepository, TweetRepository} from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {
        try {
            if (modelType == 'tweet') {
                var commentable = await this.tweetRepository.get(modelId);
            } else if(modelType == 'comment') {
                var commentable = await this.commentRepository.get(modelId);
            } else {
                throw new Error('unknown model type');
            }

            const comment = await this.commentRepository.create({
                content: content,
                userId: userId,
                modelId: modelId,
                modelType: modelType,
                comments: []
            });

            commentable.comments.push(comment);
            await commentable.save();
            return comment;

        } catch (error) {
            console.log(error);
        }
    }

}

export default CommentService;