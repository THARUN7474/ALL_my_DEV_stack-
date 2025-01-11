// console.log("Starting")
const express = require("express"); //CJS SYNTAX
// import express from 'express' // ECMAScript SYNTAX---USE THIS MORE FOR THIS "type": "module" should be specified in package json file

require("dotenv").config();
const app = express();
const port = 4000;
// const port = process.env.PORT || 4000;


const mygithubdata ={
        "login": "tharun4477",
        "id": 59282809,
        "node_id": "MDQ6VXNlcjU5MjgyODA5",
        "avatar_url": "https://avatars.githubusercontent.com/u/59282809?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/tharun4477",
        "html_url": "https://github.com/tharun4477",
        "followers_url": "https://api.github.com/users/tharun4477/followers",
        "following_url": "https://api.github.com/users/tharun4477/following{/other_user}",
        "gists_url": "https://api.github.com/users/tharun4477/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/tharun4477/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/tharun4477/subscriptions",
        "organizations_url": "https://api.github.com/users/tharun4477/orgs",
        "repos_url": "https://api.github.com/users/tharun4477/repos",
        "events_url": "https://api.github.com/users/tharun4477/events{/privacy}",
        "received_events_url": "https://api.github.com/users/tharun4477/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 16,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2019-12-27T11:12:56Z",
        "updated_at": "2023-05-19T10:05:24Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact <h1>THARUN</h1> ");
  //we can send anything here html, text, file, cookiie ...
});

app.get("/github", (req, res) => {
  res.send(mygithubdata);
});

app.listen(port, () => {
//   console.log(`Listening on port ${process.env.PORT}`);
  console.log(`Listening on port ${port}`);
});



//we can deploy see hand notes --paper in book---more there
// it is paid so not done here but refere this 1st video if you need clarity