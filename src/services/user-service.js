import UserRepository from '../repository/user-repository.js';

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUserByEmail(emailId) {
        try {
            const user = await this.userRepository.findBy(emailId);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if(!user) {
                throw {
                    message: 'no user found!!'
                }
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password'
                }
            }

            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default UserService;