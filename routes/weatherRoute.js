const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const { WEATHER_API_KEY } = process.env;

router.post("/weather", (req, res) => {
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

module.exports = router;
