const apikey = "78888868ee3f68d24a85b98e43d0d77e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");
let bkgImg = document.querySelector(".card");
const d=new Date();


async function checkWeather(city) 
{
    let responce = await fetch(apiUrl+ city + `&appid=${apikey}`);
    let data =  await responce.json();
    console.log(data);

    document.querySelector(".temp").innerHTML=data.main.temp + "&degc";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".date").innerHTML=d.toLocaleDateString();
    document.querySelector(".time").innerHTML=d.toLocaleTimeString();
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

      if (data.weather[0].main==="Clouds") {
        weatherIcon.src="images/clouds.png";
        bkgImg.style.backgroundImage="url(images/cloudImg.jpg)";
    }
    else if (data.weather[0].main==="Clear") {
        weatherIcon.src="images/clear.png";
        bkgImg.style.backgroundImage="url(images/sunnyanimated.avif)";
    }
    else if (data.weather[0].main==="Drizzle") {
        weatherIcon.src="images/drizzle.png";
        bkgImg.style.backgroundImage="url(images/drizzleanimated.jpg)";
    }
    else if (data.weather[0].main==="Humidity") {
        weatherIcon.src="images/humidity.png";
        bkgImg.style.backgroundImage="url(images/humidityanimated.jpg)";
    }
    else if (data.weather[0].main==="Mist") {
        weatherIcon.src="images/mist.png";
        bkgImg.style.backgroundImage="url(images/mistanimated.webp)";
    }
    else if (data.weather[0].main==="Rain") {
        weatherIcon.src="images/rain.png";
        bkgImg.style.backgroundImage="url(images/rainanimated3.jpg)";
    }
    else if (data.weather[0].main==="Snow") {
        weatherIcon.src="images/snow.png";
        bkgImg.style.backgroundImage="url(images/snowImg.jpeg)";
    }
    else if (data.weather[0].main==="Wind") {
        weatherIcon.src="images/wind.png";
        bkgImg.style.backgroundImage="url(images/windanimated.webp)";
    }
    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keydown', (event)=>{
    if(event.key==="Enter")
    {
        checkWeather(searchBox.value);
    }
});





