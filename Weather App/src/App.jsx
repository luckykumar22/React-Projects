import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.weatherapi.com/v1/current.json?key=e3953582ee12420da7a52504232302&q=${location}&aqi=yes`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response.data.current.temp_c);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onKeyPress={searchLocation}
          onChange={(event) => setLocation(event.target.value)}
          placeholder='Enter Location'
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
          {data.location ? data.location.name : null}
          </div>
          <div className="temp">
            {data.current ? <h1>{data.current.temp_c} C</h1> : null}
          </div>
          <div className="description">
            {data.location ? <p>{data.location.region} </p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">30 C</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.current ? data.current.humidity: null} </p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPHp</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
