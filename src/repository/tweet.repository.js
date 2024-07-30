const Tweet = require("../models/tweet.model");

class TweetRepository {
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId, data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(tweetId){
        try {
            const tweet = await Tweet.findByIdAndDelete(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:"comments"}).lean();
            return tweet;
        } catch (error) {
            
        }
    }
}



module.exports = TweetRepository;