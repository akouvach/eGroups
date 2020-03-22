import Fetch from './fetch'

const WS = {
    obtenerCredenciales : (email, password)=>{
        //voy a buscar estos datos..
        //Antes, teng que hashear la password (porque es lo que está en la BD)
        return {
            "nombre":"Andres",
            "id":1
        };
    },
    traer : (tabla="", filtros=[])=>{
        return new Promise( async (resolve, reject)=>{
            if(!tabla)
                reject("Debe cargar una tabla de api");
            try{
                let data = await Fetch(
                    tabla+".php",
                    {"filter": filtros}
                );
                // console.log("data bd: ", data);
                resolve(data);
            } catch (err){
                reject(err);
            }
        } );
    }
}

export default WS;