const axios = require('axios');



const getLugar = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

        if( resp.data.status === "ZERO_RESULTS" ){
            throw new Error(`No hay resultados para la ciudad ${ direccion }`);
        }

        let datos = resp.data.results[0];
        let coordenadas = datos.geometry.location;



    return {
        direccion: datos.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}


module.exports = {
    getLugar
}


