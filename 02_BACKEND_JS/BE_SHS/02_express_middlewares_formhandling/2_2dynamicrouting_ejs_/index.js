// seeting up parsers for forms

//setting up ejs for ejs pages
//insatll npm i ejs
//set up ejs as view engine

// seeting up public static pages

//dynamic routing
//how to get data coming from frontend at backend route

const express = require("express");
const path = require("path");
const app = express(); //calling fucntions fro app version
// const expressLayouts = require('express-ejs-layouts')//to get someting from packages we use require('module name')

app.use(express.json());
// app.use(express.static(path.join(__dirname, ')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// these are parser setting up
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("tharun");
});


//this is dynamic routing 
app.get("/tharun/:f1/:num", function (req, res) {
  const friendname = req.params.f1;
  const friendnum = req.params.num;
  res.send(
    `tharun--friend1 and hello ${friendname} and i got your number ${friendnum}`
  );
});

app.get("/page1", function (req, res) {
  res.render("index");
}); //for ejs pages loading

app.listen(3000, function () {
  console.log("listening on port 3000");
});
