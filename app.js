const express = require("express");
const { getUsers, getLondonUsers } = require("./users.controllers");
const PORT = 9090;
const app = express();

app.use(express.json());

app.get("/api/users", getUsers);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${PORT} ...`);
});

module.exports = { app };
