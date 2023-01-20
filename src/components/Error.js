function Error() {
    return ( <>
    <h3 style={{color:"#dfd3a3"}}>Enter a valid city/state name or "city/state name","2-character country-code"</h3>
    <img src={require("../assets/404.png")} height="190px" alt="Warning image"/>
    </> );
}

export default Error;