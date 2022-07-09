import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const makeRequest = () => {
    // axios
    //   .get(
    //     "https://api.openweathermap.org/data/2.5/weather?q=Oakland,CA&appid=24540ec5a93bd233c120279eb79ce2b2"
    //   )
    //   .then((res) => {
    //     console.log("request response ==>", res);
    //   });

    axios.get("http://localhost:5000/weather").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={() => makeRequest()}>Make request</button>
    </div>
  );
}

export default App;
