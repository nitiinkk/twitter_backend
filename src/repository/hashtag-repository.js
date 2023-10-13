import { Hashtag } from '../models/hashtags';

class HashtagRepository {
    async create(data) {
        try {
            const Hashtag = Hashtag.create(data);
            return Hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const response = Hashtag.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const Hashtag = Hashtag.findByIdAndRemove(id);
            return Hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

}

export default HashtagRepository;