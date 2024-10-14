const express = require("express");
const path = require("path");
// const mongoose = require('mongoose');
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index", {});
// });

// app.post("/create", async (req, res) => {
//   let { name, email, image } = req.body;
//   try {
//     // const user = new User(req.body);
//     // await user.save();
//     let user = await User.create({ name, email, image });
//     res.redirect("/read");
//     // res.send(createduser);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.get('/read',(req,res)=>{
//     res.render('read', {});
// })

// app.get("/users/:userid/edit", async (req, res) => {
//   const user = await User.findOne({ _id: req.params.userid });
//   res.render("edit", { user });
// });

// app.get("/users/:userid/delete", async (req, res) => {
//   const user = await User.findByIdAndDelete({ _id: req.params.userid });
//   res.redirect("/read");
// });

// app.post("/update/:userid", async (req, res) => {
//   const { name, email, image } = req.body;
//   let user = await User.findByIdAndUpdate(
//     { _id: req.params.userid },
//     { name, email, image },
//     { new: true }
//   );
//   res.redirect("/read");
// });






// Route to render the user creation form
app.get("/", (req, res) => {
    res.render("index", {});
  });
  
  // Route to create a new user
  app.post("/create", async (req, res) => {
    try {
      let { name, email, image } = req.body;
      await User.create({ name, email, image });
      res.redirect("/read");
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Route to render the user list
  app.get("/read", async (req, res) => {
    try {
      const users = await User.find();
      res.render("read", { users });
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Route to render the edit user form
  app.get("/users/:userid/edit", async (req, res) => {
    const user = await User.findOne({ _id: req.params.userid });
    res.render("edit", { user });
  });
  
  // Route to delete a user
  app.get("/users/:userid/delete", async (req, res) => {
    await User.findByIdAndDelete({ _id: req.params.userid });
    res.redirect("/read");
  });
  
  // Route to update a user
  app.post("/update/:userid", async (req, res) => {
    const { name, email, image } = req.body;
    await User.findByIdAndUpdate(
      { _id: req.params.userid },
      { name, email, image },
      { new: true }
    );
    res.redirect("/read");
  });
  
  
  // Start the server
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });