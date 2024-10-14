//cookie setting up 
// bcrypt using ---for password encryption
//jwt --how to store credentials or data

const cookieParser = require('cookie-parser')
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());     
app.use(cookieParser());

let users = [];


// app.get('/', (req, res) => {
//     res.cookie("name","tharun");
//     res.send("done");
// })

// app.get('/read', (req, res) => {
//     res.send("done");
// })

// app.get('/reading', (req, res) => {
//     res.send(req.cookies);
// })

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).send('Server error');
    users.push({ username, password: hash });
    console.log(hash);  
    res.redirect('/login');
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found');

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) return res.status(500).send('Server error');
    if (result) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid password');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
