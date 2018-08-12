const axios = require('axios');

const getClima = async( lat, lng ) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lat }&units=metric&appid=8472915091fdad7be2e02933d875d223`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}