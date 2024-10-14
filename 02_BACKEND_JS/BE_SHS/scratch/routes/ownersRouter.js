const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/", function (req, res) {
  res.send("hey i am owner");
});

router.post("/create", async function (req, res) {
  let owners = await ownerModel.find();
  if (owners.length > 0) {
    return res
      .status(504)
      .send("You don't have permission to create a new owner.");
  }

  let { fullname, email, password } = req.body;

  let createdOwner = await ownerModel.create({
    fullname,
    email,
    password,
  });

  res.status(201).send(createdOwner);
});

module.exports = router;

// console.log(process.env.NODE_ENV !== 'production')//envi based routing---we need ot set env varbiles for this
// // in windows---set NODE_ENV="PRODUCTION"
// // in mac-------export NODE_ENV="produciton"

// router.get('/create', function(req, res){
//     res.send('hey i am owner');
// });

// module.exports = router;

// if (process.env.NODE_ENV === "development") {
//     router.post("/create", async function (req, res) {
//         let owners = await ownerModel.find();
//         if (owners.length > 0) {
//             return res
//                 .status(504)
//                 .send("You don't have permission to create a new owner.");
//         }

//         let { fullname, email, password } = req.body;

//         let createdOwner = await ownerModel.create({
//             fullname,
//             email,
//             password,
//         });

//         res.status(201).send(createdOwner);
//     });
// }
