const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL)

const user = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
})

const User = mongoose.model("User", user)

module.exports = User;