import { useState } from "react";
import api from "./API_KEY";
import Github from "./components/Github";
import LocationBox from "./components/LocationBox";
import SearchBox from "./components/SearchBox";
import Error from "./components/Error"

function App() {
  const [input,setInput]=useState('');
  const [weather,setWeather]=useState({});

  const onSubmit=(e)=>{
    e.preventDefault();
    fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
      setWeather(result)
      console.log(result);
      setInput('')
    });
    
  }

  return (
    <div className={typeof weather.main!='undefined'?weather.main.temp<10?"app cool":weather.main.temp<20?"app mid":"app warm":"app"}>
      <main id="main">
      <SearchBox setInput={setInput} handleSubmit={onSubmit} input={input}/>
        {typeof weather.main!="undefined"?<div>
          <LocationBox weather={weather}/>
        </div>:''}
        {weather.cod==400?<Error />:''}
        <Github />
      </main>
      </div>
  );
}

export default App;
