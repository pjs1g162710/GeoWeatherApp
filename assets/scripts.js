
//<!--  select the searchButton Button -->
var searchButton = document.getElementById("searchButton");

//<!--Add the event listener to trigger running the functions-->
searchButton.addEventListener("btnClick", btnClick);

function search() {
  // 4. use the value property of the searchInput to get the search term
  var term = searchTerm.value;
}

const cityEle =document.getElementById("txtCity"); //This should return the input location e.g. 'London'
const API_Key="0bfa5f811840d225cb99d0642abdd3ee";
let weatherURlByCity;


function btnClick(){
    if(!cityEle.value)
    {
        alert('Please enter the city')
        return;
    }
     weatherURlByCity=`http://api.openweathermap.org/geo/1.0/direct?q=${cityEle.value}&appid=${API_Key}`;
        getLatLongByCity(weatherURlByCity);

}
function getLatLongByCity(weatherURlByCity)
{
       fetch(weatherURlByCity)
        .then(respone=>respone.json())
        .then(data=>{getByLatLong(data)})
        .catch((error) => console.error("Fetch error:", error));
      
}

//code past this point is not yet tested by Pip
function getByLatLong(data)
{
   let weatherURlByLonLat=`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_Key}`;
   fetch(weatherURlByLonLat)
        .then(respone=>respone.json())
        .then(data=>{displayByLatLong(data)})
        .catch((error) => console.error("Fetch error:", error));
}
function displayByLatLong(data)
{
       console.log(data);

}

//Fetch Weather Data**:

//lat and long are contained within 'data'



//   - After getting the coordinates, use the latitude and longitude to fetch weather data from the OpenWeatherMap Weather API.
//  - Example API call:  
//     `https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=-0.1278&appid=YOUR_API_KEY`

function getWeather(lat, lon) {
let weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`;

fetch(weatherDataURL)
        .then(respone=>respone.json())
        .then(data=>{displayDataWeather(data)})
        .catch((error) => console.error("Fetch error:", error));
}

function convertFtoC(degF) {
    let degC = (degF- 32) * (5 / 9) ;
    return degC;
  }

function displayDataWeather(data)
{
    console.log(data);
    let loc = data[0].name;
    let degF = data[0].main.temp;
    let celsius = convertFtoC(degF)

    

}

//**Parse the JSON Response**:

//- ;Extract the following information from the JSON response:
// `name`: The location name.
// // `main.temp`: The temperature (you may need to convert it to Celsius/Fahrenheit depending on your preference).
// `weather[0].description`: A short description of the weather conditions.




// The JSON output file format is here: https://openweathermap.org/current


 //this is in farenheit

//convert farenheit to celsius (code example adapted from here: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-celsius-to-fahrenheit/16806)

//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
//the opposite is (32°F − 32) × 5/9 = 0°C


  
  // Change the inputs below to test your code
  convertCtoF(30);

let desc = data[0].weather.description;

console.log(loc);
console.log(degC);
console.log(desc);