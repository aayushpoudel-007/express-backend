const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb://localhost:27017/fBayDB");
        console.log("Database connection successful");
    } catch (error) {
        console.log("Database connection error");
    }
};

module.exports = dbConnect;
