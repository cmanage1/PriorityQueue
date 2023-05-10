const express = require("express");
const cors = require("cors");
const app = express();
const port = 7001;

const { PriorityQueue } = require("./src/PriorityQueue");
const { sessions, addSession, bucketedSessions } = require("./src/data");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:7002");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/v1/health", (req, res) => {
  res.send("Running");
});

app.put("/v1/put/enqueue/", (req, res) => {
  const numbers = req.body.numbers.sort(); // Sorting to order based on priority later
  const time = req.body.time;
  addSession(numbers, time);

  const bucketVals = new Set();
  for (let i of numbers) {
    bucketVals.add(i);
  }

  const pq = new PriorityQueue();
  pq.createBuckets(bucketVals);
  for (let i of numbers) {
    pq.enqueue(i);
  }
  bucketedSessions[time] = pq.getBuckets();
  res.status(200).send(`Enqueue Success`);
});

app.put("/v1/put/dequeue/", (req, res) => {
  const key = req.body.time;
  const currBuckets = bucketedSessions[key];

  console.log(currBuckets);
  const pq = new PriorityQueue(currBuckets);
  // Dequeue item of highest priority
  pq.dequeue();
  bucketedSessions[time] = pq.getBuckets();

  // Send dequeued item back
  res.status(200).send("Dequeue Success");
});

app.get("/v1/get/sessions/", (req, res) => {
  res.send(sessions);
});

app.get("/v1/get/buckets/", (req, res) => {
  const key = req.query.sessionKey;
  console.log(key);
  try {
    console.log(bucketedSessions);
    res.send(bucketedSessions[key]);
  } catch (e) {
    res.status(400).send("Error. No match");
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
