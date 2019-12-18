const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a6acff8e0d3679cd1be01afe4e16f923&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}