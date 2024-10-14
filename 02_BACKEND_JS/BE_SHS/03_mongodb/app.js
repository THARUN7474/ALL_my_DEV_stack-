// const express = require("express");

// const app = express();

// // require("dotenv").config();

// // const PORT = process.env.PORT || 3000;
// const PORT = 3000;

// // app.use(express.json());

// const usermodel = require("./usermodel.");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/create", async (req, res) => {
//   let creteduser = await usermodel.create({
//     name: "Tharun",
//     email: "tharun74@gmail.com",
//     password: "123",
//   }); //THIS IS ASYN CODE SO
//   console.log(creteduser);
//   res.send(creteduser);
//   //   const user = new usermodel({
//   //     name: "ThaRrun",
//   //     email: "thaRrun@gmail.com",
//   //     password: "13323",
//   //   });

//   //   user
//   //     .save()
//   //     .then((data) => {
//   //       res.send(data);
//   //     })
//   //     .catch((err) => {
//   //       res.send(err);
//   //     });

//   //   console.log("hello!");
//   //   res.send("hello!");
// });

// app.get("/read", async (req, res) => {
//   const user = await usermodel.find();//give arrray
//   res.send(user);
// });

// app.get("/update", async (req, res) => {
//     const user = await usermodel.findOneAndUpdate(
//       { name: "Tharun" },
//       { name: "Tharun74" }
//     );
//     res.send(user);
// })

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const usermodel = require("./usermodel");

const app = express();

// Uncomment and configure dotenv if needed
// require("dotenv").config();

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/practiceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB successfully");
  // Start the server only after successful DB connection
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})
.catch(err => {
  console.error("Failed to connect to MongoDB", err);
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  try {
    let createdUser = await usermodel.create({
      name: "Tharun",
      email: "tharun74@gmail.com",
      password: "123",
    });
    console.log(createdUser);
    res.send(createdUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

app.get("/read", async (req, res) => {
  try {
    const users = await usermodel.find(); // Returns an array
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading users");
  }
});

app.get("/update", async (req, res) => {
  try {
    const updatedUser = await usermodel.findOneAndUpdate(
      { name: "Tharun" },
      { name: "Tharun74" },
      { new: true } // Return the updated document
    );
    res.send(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating user");
  }
});
