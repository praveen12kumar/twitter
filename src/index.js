const express = require("express");
const dotenv = require('dotenv');
dotenv.config({
    path:".env"
})
const {PORT} = require("../src/config/config");

const TweetRepository = require("./repository/tweet.repository");

const app = express();

const connectDB = require("./config/db");


app.listen(PORT, async() => {
    console.log("Server running on port:", PORT);
    await connectDB();
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //     content: "Hello World2",
    //     userEmail: "U6lQb@example.com",
    //     comments: [{content: "comment1"}, {content: "comment2"}]
    // });
    //const tweet = await tweetRepo.get("66a27ae83fbc8b724369dde4");
    // const tweet = await tweetRepo.update("66a27ae83fbc8b724369dde4", {
    //     content: "new very latest content",
    //     userEmail: "U6lQb@example.com"
    // });
    // console.log(tweet);
    // tweet.comments.push({content: "comment3"});
    // await tweet.save();
    // console.log(tweet);

    const tweet = await tweetRepo.getWithComments("66a2805a32ef330513648d88");
    console.log(tweet);
});