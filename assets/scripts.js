
//<!--  select the searchButton Button -->
var searchButton = document.getElementById("searchButton");

//<!--Add the event listener to trigger running the functions-->
searchButton.addEventListener("btnClick", btnClick);

const cityEle = document.getElementById("txtCity"); //This should return the input location e.g. 'London'
const API_Key = "0bfa5f811840d225cb99d0642abdd3ee";
let weatherURlByCity = "";

function convertFtoC(degF) {
  let degC = (degF - 32) * (5 / 9);
  return degC;
}

function btnClick() {
  if (!cityEle.value) {
    alert("Please enter the city");
    return;
  }
  weatherURlByCity = `http://api.openweathermap.org/geo/1.0/direct?q=${cityEle.value}&appid=${API_Key}`;
  getLatLongByCity(weatherURlByCity);
}
function getLatLongByCity(weatherURlByCity) {
  fetch(weatherURlByCity)
    .then((respone) => respone.json())
    .then((data) => {
      getByLatLong(data);
    })
    .catch((error) => console.error("Fetch error:", error));
}

//code past this point is not yet tested by Pip
function getByLatLong(data) {
  let weatherURlByLonLat = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_Key}`;
  fetch(weatherURlByLonLat)
    .then((respone) => respone.json())
    .then((data) => {
      displayByLatLong(data);
    })
    .catch((error) => console.error("Fetch error:", error));
}
function displayByLatLong(data) {
  console.log(data);

  //let loc = data[0].name;
  let degF = data[0].main.temp;
  let celsius = convertFtoC(degF);

  let desc = data[0].weather.description;

  //document.getElementById("city").innerHTML = loc;
  document.getElementById("temp").innerHTML = celsius;
  document.getElementById("desc").innerHTML = desc;
}