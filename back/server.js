const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tokenFunction = require("./parsingToken.js");

const app = express();
dotenv.config();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////------------------------

/////////////////------------------------

//.env테스트
console.log(process.env.test);

//axios테스트
app.get("/test", (req, res, next) => {
  res.json("data from back");
});

app.post("/postest", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/token", (req, res) => {
  const accessToken = req.get("Authorization");
  const idToken = req.body.idToken;

  const idTokenObj = tokenFunction.getPureTokenValues(idToken);
  const accessTokenObj = tokenFunction.getPureTokenValues(accessToken);
  // console.log(idTokenObj);
  // console.log(accessTokenObj);
  const idTokenPayload = JSON.parse(idTokenObj.payload);
  console.log(idTokenPayload);

  const userEmail = idTokenPayload.email;
  //얘를 이제 db랑 상호작용
  // 1. 유저가 이미 있으면 이미 가입된 유저라는 응답
  // 2. 없으면 없는 유저라는 응답과함꼐 이메일 주소 줌.

  res.json(
    JSON.stringify({
      message: `your email is : ${idTokenPayload.email}`,
      email: idTokenPayload.email,
    })
  );
});

app.listen(port, () => console.log("Server is running on : " + port));
