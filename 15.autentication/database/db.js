const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected successfully");
    } catch (e) {
        process.exit(1);
    }
}

module.exports = connectToDb;