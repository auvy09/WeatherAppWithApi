const apiKey = `637659bcccaede0d0940cb4bf9f37413`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}
const displayTemperature = data => {

    setInnerTextByid('temp', data.main.temp);
    setInnerTextByid('weather-type', data.weather[0].main);

}

const setInnerTextByid = (id, text) => {

    const temp = document.getElementById(id);
    temp.innerText = text;


}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;


    loadTemperature(city);

})

