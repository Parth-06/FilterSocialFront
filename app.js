const dotenv = require("dotenv");
const express = require("express");
const app = express();

const cors = require("cors");

dotenv.config({ path: "./config.env" });
require("./DB/conn");

app.use("/uploads", express.static("/uploads"));
app.use(express.json());
app.use(cors());

app.use(require("./router/auth"));
app.use(require("./router/LoginRegiAuth"));
app.use(require("./router/PostfetchAuth"));
app.use(require("./router/ProfileAuth"));
app.use(require("./router/UserProfileAuth.js"));
app.use(require("./router/FollowUnFollowAuth.js"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listning At ${PORT}`);
});
