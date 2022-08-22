const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use([
    require("./routes/homeRoute.js"),
    require("./routes/successRoute.js"),
    require("./routes/weatherRoute.js"),
    require("./routes/todoRoutes.js")
]);

app.listen(6000, () => console.log("listening on port 6000"));
