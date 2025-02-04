const cityEle =document.getElementById("txtCity");
const API_Key="0bfa5f811840d225cb99d0642abdd3ee";
let weatherURlByCity;

function btnClick(){
    debugger
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
    debugger;
    fetch(weatherURlByCity)
        .then(respone=>respone.json())
        .then(data=>{getByLatLong(data)})
        .catch((error) => console.error("Fetch error:", error));
      
}

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
    debugger;
    console.log(data);
}