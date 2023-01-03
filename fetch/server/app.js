const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;

const user = [
  {
    id: "1",
    email: "string",
    id: 0,
    name: "한준"
  },
];

app.get("/api/user", (req, res) => {
  res.json(user);
});

app.post("/api/user", (req, res) => {
  const {discord, email, id, name } = req.body;
  user.push({
    id: id++,
    discord,
    email,
    id,
    name,
  });
  return res.send("sucess");
});

app.listen(4000, () => {
  console.log("server start");
});
