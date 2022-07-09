const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { json } = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("success");
});

app.get("/success", (req, res) => {
  console.log("server side was hit");
  res.json({ msg: "better success" });
});

app.get("/weather", (req, res) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=Oakland,CA&appid=your_api_key_goes_here"
    )
    .then((weatherResponse) => {
      res.json(weatherResponse.data);
    });
});

app.listen(5000, () => console.log("listening on port 5000"));
