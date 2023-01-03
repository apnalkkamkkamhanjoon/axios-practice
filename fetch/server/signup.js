
// This should already be declared in your API file
const express = require('express')
const cors = require('cors');

const app = express();

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;

const signup = [
  {
    id: "1",
    name: "test",
    email: "test@eamil.com",
    nickname: "testbot",
    tag: "1234",
  },
];

app.get("/api/signup", (req, res) => {
  res.json(signup);
});

app.post("/api/signup", (req, res) => {
  const {name, email, nickname, tag } = req.body;
  signup.push({
    id: id++,
    name,
    email,
    nickname,
    tag
  });
  return res.send("sucess");
});

app.listen(5000, () => {
  console.log("server start");
});
