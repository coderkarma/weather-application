// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import axios from "axios";
// import { json } from "express";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";

const App = () => {
    const [city, setCity] = useState("");
    const [isError, setisError] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const handleChage = (e) => {
        const newValue = e.target.value;
        setCity(newValue);
        console.log("city ", city);
    };

    const makeRequest = () => {
        axios
            .post("http://localhost:6000/weather", { city })
            .then((res) => {
                console.log("status", res.data);
        
                setWeatherData(res.data);
    
                setCity("");
            })
            .catch((error) => {
                setisError(true);
            });
    };

    return (
        <div className='app'>
            <div className='weatherCard'>
                <input type='text' value={city} onChange={handleChage} />
            </div>
            {isError ? (
                <div className='error'>
                    <p>Error</p>
                    <button onClick={() => setisError(false)}>
                        Dimiss Error
                    </button>
                </div>
            ) : null}
            <button onClick={() => makeRequest()}>Get Weather</button>
            {weatherData ? (
                <pre>
                    <code>{JSON.stringify(weatherData, null, 4)}</code>
                </pre>
            ) : null}
        </div>
    );
};

export default App;
