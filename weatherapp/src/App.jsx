import { useState } from 'react'
import './App.css'

function App() {
  const [city,setcity] = useState("");
  const [error,seterror]=useState("");
  const [weather,setweather]=useState(null);

   async function getweather(){
    const apikey= "a9a2ec0ccb2c411c80e181046261606";
    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`);
    const data= await response.json();
    if(data.error){
      seterror("City Not Found")
      setweather(null);

    }else{
      setweather(data);
      seterror("");

    }
    
    setcity("");
  }


  return (
    <>
    <h1>WEATHER APP</h1>
    <input
    value={city}
    onChange={(e)=>setcity(e.target.value)}
    placeholder="Enter the city"
    />
    <button onClick={getweather}
    >GET WEATHER</button>
    {error && <p>{error}</p>}
    {weather &&
    <>
    <h2>CITY:{weather.location.name}</h2>
    <p>STATE:{weather.location.region}</p>
    <p>COUNTRY:{weather.location.country}</p>
    <p>TEMP:{weather.current.temp_c}°C</p>
    <p>HUMIDITY:{weather.humidity}</p>
    <p>CONDITION:{weather.current.condition.text}</p>
    </>
    }
    </>
  )
}

export default App
