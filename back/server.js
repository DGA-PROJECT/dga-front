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

const testDb = [];
// const testDb = [{ email: "ycsluvmuzzi@gmail.com" }];

/////////////////------------------------

/////////////////------------------------

// 이메일 체크 함수

function checkEmailExists(dbArray, targetEmail) {
  return dbArray.some((obj) => obj.email === targetEmail);
}

function checkNicknameExists(dbArray, targetNickname) {
  return dbArray.some((obj) => obj.nickname === targetNickname);
}
//.env테스트
console.log(process.env.test);

//axios테스트
app.get("/test", (req, res, next) => {
  res.json("data from back");
});

app.post("/postest", (req, res) => {
  console.log(req.body);
  req.body.message = "성공했어!";
  res.json(req.body);
});

app.post("/checknewbie", (req, res) => {
  try {
    const idToken = req.get("Authorization");
    const accessToken = req.body.accessToken;

    const idTokenObj = tokenFunction.getPureTokenValues(idToken);
    const accessTokenObj = tokenFunction.getPureTokenValues(accessToken);
    // console.log(idTokenObj);
    // console.log(accessTokenObj);
    const idTokenPayload = JSON.parse(idTokenObj.payload);
    console.log(idTokenPayload);

    const userEmail = idTokenPayload.email;
    console.log(userEmail, "여기야");
    //얘를 이제 db랑 상호작용
    // 1. 유저가 이미 있으면 이미 가입된 유저라는 응답
    // 2. 없으면 없는 유저라는 응답과함꼐 이메일 주소 줌.

    if (checkEmailExists(testDb, userEmail)) {
      // 이미 유저가 존재하는 경우
      res.json({
        email: userEmail,
      });
    } else {
      //뉴비인경우
      let answer = {
        newbie: true,
        email: userEmail,
      };
      res.json(JSON.stringify(answer));
    }

    //여기까진 test db array로 테스트한거임
  } catch (err) {
    res.json(JSON.stringify(err));
  }
});

app.post("/checkusedNickname", (req, res) => {
  try {
    const idToken = req.get("Authorization");
    const accessToken = req.body.accessToken;
    const nickname = req.body.nickname;

    const idTokenObj = tokenFunction.getPureTokenValues(idToken);
    const accessTokenObj = tokenFunction.getPureTokenValues(accessToken);
    // console.log(idTokenObj);
    // console.log(accessTokenObj);
    const idTokenPayload = JSON.parse(idTokenObj.payload);

    const userEmail = idTokenPayload.email;

    console.log(nickname);
    if (checkEmailExists(testDb, nickname)) {
      // 이미 사용중인 닉네임인 경우
      let answer = {
        isExist: true,
        nickname: nickname,
      };
      res.json(JSON.stringify(answer));
    } else {
      // 가능한경우
      let answer = {
        isExist: false,
        nickname: nickname,
      };
      res.json(JSON.stringify(answer));
    }

    //여기까진 test db array로 테스트한거임
  } catch (err) {
    res.json(JSON.stringify(err));
  }
});

app.post("/signup", (req, res) => {
  try {
    const idToken = req.get("Authorization");
    const accessToken = req.body.accessToken;

    const idTokenObj = tokenFunction.getPureTokenValues(idToken);
    const accessTokenObj = tokenFunction.getPureTokenValues(accessToken);

    const idTokenPayload = JSON.parse(idTokenObj.payload);
    console.log(idToken);

    const userEmail = idTokenPayload.email;
    //얘를 이제 db랑 상호작용
    // 1. 유저가 이미 있으면 이미 가입된 유저라는 응답
    // 2. 없으면 없는 유저라는 응답과함꼐 이메일 주소 줌.

    if (checkEmailExists(testDb, userEmail)) {
      // 이미 유저가 존재하는 경우
      res.json(
        JSON.stringify({
          message: `your email is : ${idTokenPayload.email}`,
          email: idTokenPayload.email,
        })
      );
    } else {
      //뉴비인경우
      let answer = {
        newbie: true,
        email: userEmail,
      };
      res.json(JSON.stringify(answer));
    }
  } catch (err) {
    res.json(JSON.stringify(err));
  }
});

app.listen(port, () => console.log("Server is running on : " + port));
