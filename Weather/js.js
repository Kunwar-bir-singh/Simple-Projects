const apiKey = "e77513973ee4b0fa7c1aeb488bd7c281"
const inputCity =document.querySelector(".search input")
const inputBtn =document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
let onOff = document.querySelector(".weather")
let errorMsg = document.querySelector(".error");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWeather(city){
	
	const response = await fetch(apiUrl + city + `&appid=${apiKey}` +"&units=metric")
	
	if(response.status =="404"){
		onOff.style.display= "none"
		errorMsg.style.display= "block"
	}

	var data = await response.json()
	console.log(data)
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + " °C";
	document.querySelector(".humidity").innerHTML = Math.round( data.main.humidity) +" %";
	document.querySelector(".wind").innerHTML =  Math.round(data.wind.speed) +" Km/h";

	if(data.weather[0].main == "Clouds"){
		weatherIcon.src="images/clouds.png"
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src="images/clear.png"
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src="images/clear.png"
	}
	else if(data.weather[0].main == "Rain"){
		weatherIcon.src="images/rain.png"
	}
	else if(data.weather[0].main == "Drizzle"){
		weatherIcon.src="images/drizzle.png"
	}
	else{
		weatherIcon.src="images/mist.png"
	}
	errorMsg.style.display= "none"
}
inputBtn.addEventListener("click" ,()=>{

	checkWeather(inputCity.value);
	onOff.style.display = "contents"

})