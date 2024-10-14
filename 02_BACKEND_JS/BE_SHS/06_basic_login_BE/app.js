const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
mongoose
  .connect("mongodb://127.0.0.1:27017/users__DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const User = require("./models/user");

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "secretkey", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(
        { name: user.name, email: user.email },
        "secretkey"
      );
      res.cookie("jwt", accessToken, { httpOnly: true });
      res.redirect("/");
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
  });
  
  app.get('/protected', authenticateToken, (req, res) => {
    res.send('<h1>This is a protected route</h1><img src="/images/protected-image.jpg" alt="Protected Image">');
  });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});