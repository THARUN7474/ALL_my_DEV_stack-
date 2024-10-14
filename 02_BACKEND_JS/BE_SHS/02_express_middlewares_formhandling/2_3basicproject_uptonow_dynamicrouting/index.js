// console.log("hef");

const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   fs.readdir(`./files`, function (err, files) {
//     // console.log(files);
//     // console.log(files.length);
//     // conoels.log(files,json());
//     res.render("index", { tasks: files }); //sending this ibnly when some files read from it
//   });

//   // //   res.render("index");
// });

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    if (err) {
      console.log(err);
      res.render("index", { tasks: [] });
    } else {
      const tasks = files.map((file) => {
        const content = fs.readFileSync(`./files/${file}`, "utf8");
        return {
          heading: file.replace(".txt", ""),
          link: `files/${file}`,
          linkText: file,
          description: content,
        };
      });
      res.render("index", { tasks });
    }
  });
});

// app.post("/create", (req, res) => {
//     console.log(req.body);
//     fs.writeFile(`./files/${req.body.filename.split().join()}.txt`, req.body.content, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect("/");
//         }
//     });
//   });
app.post("/create", (req, res) => {
  const { title, content } = req.body;
  const filename = `${title.split(" ").join("_")}.txt`;
  fs.writeFile(`./files/${filename}`, content, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  const content = fs.readFileSync(`./files/${filename}`, "utf8");
  res.render("show", { heading: filename.replace(".txt", ""), content });
});
// so make me a show --ejs file

// app.put("/files/:filename/edit", (req, res) => {
//     //so that i need a edit option in the ---file of main ejs--index ejs too give me that too
//     //here i want to make that editing showing that previous heading and new heading as input
//     // in ejs files  and -----when loaded it should show previous name there filled
//     // we need to make the new chanages refelct in main /
//   });
//   // so make me a edittt --ejs file

app.get("/files/:filename/edit", (req, res) => {
  const filename = req.params.filename;
  const content = fs.readFileSync(`./files/${filename}`, "utf8");
  res.render("edit", {
    heading: filename.replace(".txt", ""),
    content,
    filename,
  });
});

app.post("/files/:filename/edit", (req, res) => {
  const filename = req.params.filename;
  const newFilename = `${req.body.title.split().join("")}.txt`;
  fs.renameSync(`./files/${filename}`, `./files/${newFilename}`);
  fs.writeFileSync(`./files/${newFilename}`, req.body.content);
  res.redirect("/");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
