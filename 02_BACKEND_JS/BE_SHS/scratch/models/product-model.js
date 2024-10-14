const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/scratch", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});

module.exports = mongoose.model("user", productSchema);
