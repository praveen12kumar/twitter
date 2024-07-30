const mongoose = require('mongoose');

const tweetschema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    comments:[
        {
            content:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
})

const Tweet = mongoose.model('Tweet',tweetschema);
module.exports = Tweet;

