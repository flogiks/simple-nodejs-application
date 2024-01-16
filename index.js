var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

const axios = require("axios");

const getAuthSessionToken = async () => {
  try {
    const token = await axios.post(
      "https://api.getknit.dev/v1.0/auth.createSession",
      {
        originOrgId: "Rapido1",
        originOrgName: "Rapido1",
        originUserEmail: "nischal@superbeings.ai",
        originUserName: "Nischal Chenna",
      },
      {
        headers: {
          Authorization:
            "Bearer ba12085b33fd501eae7dbc154f7f546e6a25f69d1b3503ad1a2ee228f39f23d3",
        },
      }
    );
    return token.data;
  } catch (err) {
    console.error(err);
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
