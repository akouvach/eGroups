import WS from '../context/bd';

const Usuario = {
    get : ()=>{
        return WS.get();
    }
}

export default Usuario;