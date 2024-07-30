
const mongoose = require('mongoose');
const {DB_NAME} = require('../constants'); // Ensure this correctly exports the database name

const connectDB = async () => {
    console.log("Trying to connect to db");
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); // Corrected line
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error); // Use console.error for logging errors
        process.exit(1);
    }
};

module.exports = connectDB;
