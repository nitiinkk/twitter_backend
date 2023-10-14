import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(emailId) {
        try {
            const response = User.findOne(emailId);
            return response;
        } catch (error) {
            console.log(error);
        }
    } 
}

export default UserRepository;