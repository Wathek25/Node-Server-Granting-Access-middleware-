const express = require("express");
const isAuth = require("./middleware/isAuth");

const app = express();

const PORT = 8000;

app.use(isAuth);

app.use(express.static("Public"));

app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`Server is running on port number ${PORT}`)
);
