const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const app = express();

const secret = 'mysecret'; // Use environment variables in production

// Render registration page
router.get('/register', (req, res) => {
  res.render('register');
});

// app.get('/register', (req, res) => {
//     res.render('register');
//   });

// Render login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.redirect('/auth/login');
});

// Handle login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/');
});

// Handle logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/auth/login');
});

module.exports = router;
