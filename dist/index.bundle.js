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



displayWeather("Monaco")

async function weather(city) {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fe0199b3b09ac84b46e6413bc44a3a3f&units=metric`, {mode: "cors"})
        if (response.ok) {
            let data = await response.json();

            console.log(data);

            const obj = await dataObj(data)

            console.log(obj);

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

    const obj = {
        weather: data.weather,
        location: data.name,
        temp: data.main.temp,
        
    }

    console.log(obj["temp"])
    
    return obj
}

let celsius;
let fahrenheit;



async function displayWeather(location) {

    try {
        const obj = await weather(location)
    
        city.textContent = obj.location;
    
        celsius = Math.round(obj["temp"] * 10) / 10;
        fahrenheit = (celsius * (9 / 5)) + 32;
        
    
        temp.textContent = `${celsius} C`
        weatherInfo.textContent = obj["weather"][0].main
        desc.textContent = obj["weather"][0].description
    } catch (err){
        console.log(err)
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGLEtBQUssd0RBQXdELGFBQWE7QUFDaks7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNIQUFzSCxLQUFLLEtBQUssYUFBYTtBQUM3STtBQUNBLDhEQUE4RCw2QkFBNkI7QUFDM0Y7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSwrQkFBK0IsU0FBUztBQUN4Qyw4QkFBOEIsWUFBWTtBQUMxQyxNQUFNLDJCQUEyQixTQUFTO0FBQzFDO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIilcbmNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpXG5jb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjXCIpXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuY29uc3QgZXJyd29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKVxuXG5cblxuZGlzcGxheVdlYXRoZXIoXCJNb25hY29cIilcblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlcihjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPWZlMDE5OWIzYjA5YWM4NGI0NmU2NDEzYmM0NGEzYTNmJnVuaXRzPW1ldHJpY2AsIHttb2RlOiBcImNvcnNcIn0pXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBjb25zdCBvYmogPSBhd2FpdCBkYXRhT2JqKGRhdGEpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG5cbiAgICAgICAgICAgIGF3YWl0IGJhY2tncm91bmRJbWcoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnQoXCJsb2NhdGlvbiBub3QgZm91bmRcIilcblxuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJhY2tncm91bmRJbWcoZGVzYykge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1wcXJ0VVFsNjF5dmlvVFVKSlc0N29hVmlIS2RmZHdLRyZzPVwiJHtkZXNjfVwiYCwge21vZGU6IFwiY29yc1wifSlcbiAgICBsZXQgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke3Jlcy5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmx9XCIpYClcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBkYXRhT2JqKGRhdGEpIHtcblxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyLFxuICAgICAgICBsb2NhdGlvbjogZGF0YS5uYW1lLFxuICAgICAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cob2JqW1widGVtcFwiXSlcbiAgICBcbiAgICByZXR1cm4gb2JqXG59XG5cbmxldCBjZWxzaXVzO1xubGV0IGZhaHJlbmhlaXQ7XG5cblxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihsb2NhdGlvbikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgd2VhdGhlcihsb2NhdGlvbilcbiAgICBcbiAgICAgICAgY2l0eS50ZXh0Q29udGVudCA9IG9iai5sb2NhdGlvbjtcbiAgICBcbiAgICAgICAgY2Vsc2l1cyA9IE1hdGgucm91bmQob2JqW1widGVtcFwiXSAqIDEwKSAvIDEwO1xuICAgICAgICBmYWhyZW5oZWl0ID0gKGNlbHNpdXMgKiAoOSAvIDUpKSArIDMyO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXN9IENgXG4gICAgICAgIHdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gb2JqW1wid2VhdGhlclwiXVswXS5tYWluXG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBvYmpbXCJ3ZWF0aGVyXCJdWzBdLmRlc2NyaXB0aW9uXG4gICAgfSBjYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuXG5cblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TZWFyY2hcIilcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkaXNwbGF5V2VhdGhlcihpbnB1dC52YWx1ZSlcbn0pXG5cbnRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgIGlmICh0ZW1wLnRleHRDb250ZW50ID09IGAke2NlbHNpdXN9IENgKSB7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0fSBGYFxuICAgIH0gZWxzZSB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y2Vsc2l1c30gQ2BcbiAgICBcbn0pXG5cbiAgICBcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==