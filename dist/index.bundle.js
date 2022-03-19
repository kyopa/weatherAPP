/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const city = document.querySelector(".location")
const weatherInfo = document.querySelector(".weather")
const wind = document.querySelector(".wind")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")
const container = document.querySelector(".container")
const errwor = document.querySelector(".error")

const obj = {}

displayWeather("Monaco")

async function weather(city) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fe0199b3b09ac84b46e6413bc44a3a3f&units=metric`, {mode: "cors"})
        if (response.ok) {
            let data = await response.json();

            await dataObj(data)

            await backgroundImg(data.weather[0].description)
            
            return obj
        }
        alert("location not found")

        
    } catch (err){
        console.error(err)
    }
}

async function backgroundImg(desc) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=pqrtUQl61yvioTUJJW47oaViHKdfdwKG&s="${desc}"`, {mode: "cors"})
    let res = await response.json()
    container.setAttribute("style", `background-image: url("${res.data.images.original.url}")`)
}


async function dataObj(data) {
    obj["weather"] = await data.weather
    obj["location"] = await data.name
    obj["temp"] = await data.main.temp
    obj["wind"] = await data.wind

    return obj
}

let celsius;
let fahrenheit;

function displayWeather(location) {
    weather(location)
        .then(obj => {
            
            city.textContent = obj["location"]

            celsius = Math.round(obj["temp"] * 10) / 10;
            fahrenheit = (celsius * (9 / 5)) + 32;
            

            temp.textContent = `${celsius} C`
            weatherInfo.textContent = obj["weather"][0].main
            desc.textContent = obj["weather"][0].description
        }).catch(() => {
            console.log("location not found")
            city.textContent = "Location not found"
        })
}



const input = document.querySelector("input")

const button = document.querySelector(".Search")
button.addEventListener("click", (e) => {
    e.preventDefault();
    

    displayWeather(input.value)
})

temp.addEventListener("click", () => {

    if (temp.textContent == `${celsius} C`) {
        temp.textContent = `${fahrenheit} F`
    } else temp.textContent = `${celsius} C`
   
    
})

    







/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RixLQUFLLHdEQUF3RCxhQUFhO0FBQ2pLO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzSEFBc0gsS0FBSyxLQUFLLGFBQWE7QUFDN0k7QUFDQSw4REFBOEQsNkJBQTZCO0FBQzNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsK0JBQStCLFNBQVM7QUFDeEMsOEJBQThCLFlBQVk7QUFDMUMsTUFBTSwyQkFBMkIsU0FBUztBQUMxQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIilcbmNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpXG5jb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjXCIpXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuY29uc3QgZXJyd29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKVxuXG5jb25zdCBvYmogPSB7fVxuXG5kaXNwbGF5V2VhdGhlcihcIk1vbmFjb1wiKVxuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9ZmUwMTk5YjNiMDlhYzg0YjQ2ZTY0MTNiYzQ0YTNhM2YmdW5pdHM9bWV0cmljYCwge21vZGU6IFwiY29yc1wifSlcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgYXdhaXQgZGF0YU9iaihkYXRhKVxuXG4gICAgICAgICAgICBhd2FpdCBiYWNrZ3JvdW5kSW1nKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0KFwibG9jYXRpb24gbm90IGZvdW5kXCIpXG5cbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBiYWNrZ3JvdW5kSW1nKGRlc2MpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9cHFydFVRbDYxeXZpb1RVSkpXNDdvYVZpSEtkZmR3S0cmcz1cIiR7ZGVzY31cImAsIHttb2RlOiBcImNvcnNcIn0pXG4gICAgbGV0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtyZXMuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsfVwiKWApXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZGF0YU9iaihkYXRhKSB7XG4gICAgb2JqW1wid2VhdGhlclwiXSA9IGF3YWl0IGRhdGEud2VhdGhlclxuICAgIG9ialtcImxvY2F0aW9uXCJdID0gYXdhaXQgZGF0YS5uYW1lXG4gICAgb2JqW1widGVtcFwiXSA9IGF3YWl0IGRhdGEubWFpbi50ZW1wXG4gICAgb2JqW1wid2luZFwiXSA9IGF3YWl0IGRhdGEud2luZFxuXG4gICAgcmV0dXJuIG9ialxufVxuXG5sZXQgY2Vsc2l1cztcbmxldCBmYWhyZW5oZWl0O1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihsb2NhdGlvbikge1xuICAgIHdlYXRoZXIobG9jYXRpb24pXG4gICAgICAgIC50aGVuKG9iaiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBvYmpbXCJsb2NhdGlvblwiXVxuXG4gICAgICAgICAgICBjZWxzaXVzID0gTWF0aC5yb3VuZChvYmpbXCJ0ZW1wXCJdICogMTApIC8gMTA7XG4gICAgICAgICAgICBmYWhyZW5oZWl0ID0gKGNlbHNpdXMgKiAoOSAvIDUpKSArIDMyO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjZWxzaXVzfSBDYFxuICAgICAgICAgICAgd2VhdGhlckluZm8udGV4dENvbnRlbnQgPSBvYmpbXCJ3ZWF0aGVyXCJdWzBdLm1haW5cbiAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBvYmpbXCJ3ZWF0aGVyXCJdWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9jYXRpb24gbm90IGZvdW5kXCIpXG4gICAgICAgICAgICBjaXR5LnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiBub3QgZm91bmRcIlxuICAgICAgICB9KVxufVxuXG5cblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TZWFyY2hcIilcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG5cbiAgICBkaXNwbGF5V2VhdGhlcihpbnB1dC52YWx1ZSlcbn0pXG5cbnRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgIGlmICh0ZW1wLnRleHRDb250ZW50ID09IGAke2NlbHNpdXN9IENgKSB7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0fSBGYFxuICAgIH0gZWxzZSB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y2Vsc2l1c30gQ2BcbiAgIFxuICAgIFxufSlcblxuICAgIFxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9