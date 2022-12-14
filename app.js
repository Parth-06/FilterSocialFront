const dotenv = require("dotenv");
const express = require("express");
const app = express();

let cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: "https://filtersocial.netlify.app",
  })
);
dotenv.config({ path: "./config.env" });
require("./DB/conn");

app.use(express.json());

app.use(require("./router/auth"));
app.use(require("./router/LoginRegiAuth"));
app.use(require("./router/PostfetchAuth"));
app.use(require("./router/ProfileAuth"));
app.use(require("./router/UserProfileAuth.js"));
app.use(require("./router/FollowUnFollowAuth.js"));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`listning At ${PORT}`);
});
