var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

const axios = require("axios");

const getAuthSessionToken = async () => {
  try {
    const token = await axios.post(
      "https://api.sandbox.getknit.dev/v1.0/auth.createSession",
      {
        originOrgId: "Rapido",
        originOrgName: "Rapido",
        originUserEmail: "nischal@superbeings.ai",
        originUserName: "Nischal Chenna",
      },
      {
        headers: {
          Authorization:
            "Bearer 09e8b0adebb2df4bfc205be8ffe9e3c24297c37d4e005286b2f3bab773e5e24f",
        },
      }
    );
    return token.data;
  } catch (err) {
    throw new Error("Unable to get a token.");
  }
};
app.get("/getSessionToken", async function (req, res) {
  try {
    const token = await getAuthSessionToken();
    console.log(token);
    // Do your stuff with the token
    // ...
    res.send(JSON.stringify(token));
  } catch (err) {
    // Error handling here
    return res.status(401).send(err.message);
  }
  //   res.send(getAuthSessionToken());
});

app.listen(8081, function () {
  console.log("Example app listening at http://localhost:8081");
});
