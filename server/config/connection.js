const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI, "patrick this is thee uri");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

module.exports = mongoose.connection;
