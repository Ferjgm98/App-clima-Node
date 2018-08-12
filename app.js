const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar( direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
    
        return `El clima en ${ coors.direccion } es de ${ temp } grados centigrados.`;
    
    } catch(e){
        return `No se pudo determinar el clima en ${ direccion}`;
    }
}

getInfo(argv.direccion)
    .then( resp => {
        console.log(resp);
    })
    .catch( e => console.log(e));