const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI, "patrick this is thee uri");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
// mongoose
//   .connect(
//     "mongodb+srv://patricklowe1991:wqJBEQ34i30IwXiL@cluster0.vwbtnsb.mongodb.net/googlebooks?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .catch((err) => console.log(err));

module.exports = mongoose.connection;
