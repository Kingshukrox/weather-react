function WeatherBox({temp,status}){
    return(<>
    <div id="weatherbox">
        <div id="temp">
            {Math.round(temp)}°C
        </div>
        <div id="weather">
        {status}
        </div>
    </div>
    </>)
}

function LocationBox({weather}) {
    // const d=new Date().toString();
    return (  <>
    <div id="locationbox">
        <div id="location">{weather.name},{weather.sys.country}</div>
        {/* <div id="date">{d}</div> */}
        <WeatherBox temp={weather.main.temp} status={weather.weather[0].main}/>
    </div>
    </>);
}

export default LocationBox;