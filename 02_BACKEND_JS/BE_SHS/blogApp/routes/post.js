const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

const secret = 'mysecret'; // Use environment variables in production

// Middleware to authenticate user
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.redirect('/login');
    req.user = user;
    next();
  });
}

router.post('/create', authenticateToken, async (req, res) => {
  const post = new Post({
    postdata: req.body.postdata,
    user: req.user.id
  });
  await post.save();
  await User.findByIdAndUpdate(req.user.id, { $push: { posts: post._id } });
  res.redirect('/');
});

router.get('/view/:id', authenticateToken, async (req, res) => {
  const post = await Post.findById(req.params.id).populate('user');
  if (!post) return res.status(404).send('Post not found');
  res.render('view', { post });
});

module.exports = router;
