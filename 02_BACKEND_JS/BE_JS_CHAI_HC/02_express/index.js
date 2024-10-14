//to run use npm run start
import express from "express";
import logger from './logger.js';
import morgan from 'morgan';
const app = express();

const port = 3000;

// /here what type of request is not checked----in noraml http no express
//nbut here it checks what type liek app.get ---app.post all that must

app.use(express.json());
// app.use(express.)
//untill app is there we cant inject ---the middlewares
const morganFormat = ':method :url :status :response-time ms';
app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],

      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));

let dataa = [1];
let nid = 1;

//to add coureses---one by one
app.post("/getcourses", (req, res) => {
  logger.info("hello i am posting ")
  const { name, price } = req.body;
  const newele = { id: nid++, name, price };
  dataa.push(newele);
  res.status(201).send(dataa);
});

//to get coureses
app.get("/getcourses", (req, res) => {
  res.status(200).send(dataa); //we can chain things up
});

// to update the course details
app.put("/getcourses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = dataa.findIndex((c) => c.id === id);
  const course = dataa.find((c) => c.id === id);
  if (index !== -1) {
    dataa[index] = req.body;
    const { name, price } = req.body;
    course.name = name;
    course.price = price;
    res.status(200).send(dataa);
  } else {
    res.status(404).send("Course not found");
  }
});

//to delted course data
app.delete("/getcourses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = dataa.findIndex((c) => c.id === id);
  if (index !== -1) {
    dataa.splice(index, 1);
    res.status(200).send(dataa);
  } else {
    res.status(404).send("Course not found");
  }
});

// to get a single course with id
app.get("/getcourses/:id", (req, res) => {
  //anything comes through url we handle with params
  const id = parseInt(req.params.id);
  const course = dataa.find((c) => c.id === id);
  if (course) {
    res.status(200).send(course);
  } else {
    res.status(404).send("Course not found");
  }
});

//test get 1 home page
app.get("/", function (req, res) {
  res.send("Hello Worlddddsddddd");
});

//test get /tharun
app.get("/tharun", function (req, res) {
  res.send("Hello tharun!");
});

//test post /
app.post("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profiles", function (req, res, next) {
  return next(new Error("Not implemented"));
});

//error handling--->
app.use(function (err, req, res, next) {
  res.status(500).send(err.message);
});

//main listening one ---server listens to requestes
app.listen(port, function () {
  console.log(`Listening on port ${port} and server is running here..`);
});



//tests, documentation in post man --done checkout notion page


//to optimize wr need to measure---1ST
//so we follow ---node loggers---to log data