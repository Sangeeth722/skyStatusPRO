function getWeather(){

   
    const apiKey = "c903490f8f434691af1142842252102"
    const city = document.getElementById("searchField").value;
    const days = 1;

    const params = new URLSearchParams({
        key: apiKey,
        q: city,
        days: days
    });

    fetch(`https://api.weatherapi.com/v1/forecast.json?${params}`)
    .then(response =>response.json())
    .then(data =>{console.log(data.current.condition.icon)
        
        const location = data.location.name
        const region = data.location.region
        const country = data.location.country
        
        const lastUpdate = data.current.last_updated
        const temp = data.current.temp_c
        const wheatherIcon = "https:" + data.current.condition.icon
        const humidity = data.current.humidity
        const wind = data.current.wind_kph


        // document.getElementById("location").innerHTML =`📍 Location: ${location}, ${region}, ${country}`

        
        document.getElementById("img").src = wheatherIcon
        
        

        document.getElementById("temprature").innerHTML  = ` ${temp}°C`
        document.getElementById("location").innerHTML = location

        document.getElementById("humidity").innerHTML = `${humidity} %`
        document.getElementById("wind").innerHTML = `${wind} km/h`

        console.log(data)
        


        
        
    })
    .catch(error => {
        console.error("Error:", error);
        alert(error); 
    });



} 
