const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/usersDB");
// .then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Could not connect to MongoDB', err);
// });

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("User", userSchema);
