const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send(`
  <h1>Welcome to Home Page</h1>
  <a href='/About'>Go to About Page</a>
  `);
});

app.get("/About", (req, res) => {
  res.send(
    `
    <input type='text' placeholder="Username" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href='/'>Go to Home Page</a>

    `
  );
});

app.get("/Help", (req, res) => {
  res.send([
    {
      name: "Ali",
      email: "alihaidercs17@gmail.com",
    },
    {
      name: "Haider",
      email: "alihaidercs17@gmail.com",
    },
  ]);
});

app.listen(4000);
