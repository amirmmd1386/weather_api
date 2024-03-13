let title = document.getElementById('city')
let im_info = document.getElementById('im_info')
let bg = document.getElementById('bg')
const modalTxt = document.getElementById('modalTxt')
const city = document.getElementById('city')
const temp = document.getElementById('temp')
modalTxt.addEventListener('keyup', (e) => {
    if (modalTxt.value.length > 7) {
        title.style.fontSize = "2rem"
    }
    else{
        title.style.fontSize = "3rem"   
    }

    if (e.key == "Enter") {
        city.innerHTML = modalTxt.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${modalTxt.value}&appid=948edcefe7d8e13f1fa5586c68137aaa`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                temp.innerHTML = Math.floor(data.main.temp - 273.15) + '<sup>.</sup>';
                let h = weatherPic(data.weather[0].main.toLowerCase())
            })
    }
})
let weatherPic = (d) => {
    fetch('dist/data.json')
        .then(res => res.json())
        .then(data => {
            switch (d) {
                case "clouds":
                    im_info.innerHTML = data[0].sun_cloud
                    bg.style.backgroundImage = `url(${data[1].sun_cloud})`
                    break;
                case "rain":
                    im_info.innerHTML = data[0].rain_cloud
                    bg.style.backgroundImage = `url(${data[1].rain_cloud})`
                    break;
                case "snow":
                    im_info.innerHTML = data[0].snow_cloud
                    bg.style.backgroundImage = `url(${data[1].snow_cloud})`
                    break;
                case "clear":
                    im_info.innerHTML = data[0].sunshine
                    bg.style.backgroundImage = `url(${data[1].sunshine})`
                    break;
                case "wind":
                    im_info.innerHTML = data[0].windy_cloud
                    bg.style.backgroundImage = `url(${data[1].windy_cloud})`
                    break;
                case "mist":
                    im_info.innerHTML = data[0].rain_cloud
                    bg.style.backgroundImage = `url(${data[1].rain_cloud})`
                    break;
                case "thunder":
                    im_info.innerHTML = data[0].thunder_cloud
                    bg.style.backgroundImage = `url(${data[1].thunder_cloud})`
                    break;
            }
        })
}
