const API_KEY = "7b2d8c465a657f7dfa6e39a5431c5029";

function onGeoOK(pos) { //'pos' means 'position'.
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.main.temp}℃ / ${data.weather[0].main}`;
            city.innerText = data.name;

        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);