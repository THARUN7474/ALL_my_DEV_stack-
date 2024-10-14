// // ORM  AND ODM

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/practiceDB");

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   //   name: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   email: {
//   //     type: String,
//   //     required: true,
//   //     unique: true,
//   //   },
//   //   title: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   department: {
//   //     type: String,
//   //     required: true,
//   //     maxLength: 20,
//   //   },
//   //   role: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   image: {
//   //     type: String,
//   //   },
// });

// module.exports = mongoose.model("User", userSchema); //ONE DOCUMENT IS USER SO MODEL WILL BE USERS
// //form this filem users models is exported


const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // Uncomment the fields if needed and add validations as required
  // name: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // title: {
  //   type: String,
  //   required: true,
  // },
  // department: {
  //   type: String,
  //   required: true,
  //   maxLength: 20,
  // },
  // role: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  // },
});

module.exports = mongoose.model("User", userSchema); // This exports the User model
