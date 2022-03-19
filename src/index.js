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

const loading = document.querySelector(".loading")


const input = document.querySelector("input")

const button = document.querySelector(".Search")
button.addEventListener("click", async (e) => {
    e.preventDefault();



    displayWeather(input.value)
    
    
})

temp.addEventListener("click", () => {

    if (temp.textContent == `${celsius} C`) {
        temp.textContent = `${fahrenheit} F`
    } else temp.textContent = `${celsius} C`
   
    
})

    






