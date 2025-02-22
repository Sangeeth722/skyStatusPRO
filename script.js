const apiKey = "c903490f8f434691af1142842252102"
const city = "kollam"
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
    const localTime = data.localTime.localtime
    const lastUpdate = data.current.last_updated
    const temp = data.current.temp
    const wheatherIcon = "https:" + data.current.condition.icon


    document.getElementById("location").innerHTML = location


    
    
})
.catch(error => console.error("Error",error));



