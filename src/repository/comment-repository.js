import comment from '../models/comment.js';
import CrudRepository from './crud-repository.js';


class CommentRepository extends CrudRepository {
    constructor() {
        super(comment);
    }
}

export default CommentRepository;