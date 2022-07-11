const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const { json } = require("body-parser");
require("dotenv").config();

const { WEATHER_API_KEY } = process.env;
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

app.post("/weather", (req, res) => {
    console.log("body", req.body);
    const { city } = req.body;
    const encodedCity = encodeURIComponent(city);
    console.log("encodedCity", encodedCity);
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${WEATHER_API_KEY}`
        )
        .then((weatherResponse) => {
            res.json(weatherResponse.data);
        })
        .catch((error) => {

            return res.status(500).json({});
        });
});

app.listen(6000, () => console.log("listening on port 6000"));
