const mongoose = require('mongoose');
// const config = require('config');
const dbgr = require('debug')("development:mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scratch", {//this link is only for local hosting but while deploying we need to 
    // .connect(`${config.get("MONGODB_URL")}/scratch`, {use dynamic thing
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => dbgr("MongoDB connected"))//here conosle.log("MongoDB connected") is replaced by dbgr("MongoDB connected")
  .catch((err) => dbgr(err));


module.exports = mongoose.connection;

//now done tge soc--speration of concerns


///here we need to set env varibales fo debuging too
// xport DEBUG=development:*