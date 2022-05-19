const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const sleep = (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );

app.get("/", (req, res) => {
  res.send("NodeJS Performance Tester API");
});

const delays = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

delays.forEach((delay) => {
  app.get(`/${delay}ms`, async (req, res) => {
    await sleep(delay);
    res.send(`${delay}ms`);
  });
});

app.listen(port, () => {
  console.log(`Nodejs app listening on port ${port}`);
});
