import { useEffect, useState } from "react";
import './Weather.css'


const api = {
    key: "44516b372e7eba9054202ac20915bfeb",
    base: "https://api.openweathermap.org/data/2.5/",
  };

export default function Weather(){
        const [search, setSearch] = useState("");
        const [weather, setWeather] = useState({});
      
        /*
          Search button is pressed. Make a fetch call to the Open Weather Map API.
        */

        const searchPressed = () => {
          fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
              setWeather(result);
              console.log(result);
            });
        };
      
    
    return (
        <div >
            <h1>Weather App</h1>
           <input type="text" placeholder="Enter City or town" onChange={(e) =>setSearch(e.target.value)} />
            <button onClick={searchPressed}>Submit</button>
            {typeof weather.main !== "undefined" ? (
          <div >
            {/* Location  */}
            <p className="wt1">{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <span>
         <p className="body1">{(weather.weather[0].main==="Rain"?"☔":"")}</p>
         <p>{(weather.weather[0].main==="Clouds"?"🌥":"")}</p>
         <p>{(weather.weather[0].main==="Clear"?"🌝 ":"")}</p>

         </span>

            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
        </div>
        
    );
}