import React , {useState }from 'react';
import PropTypes from 'prop-types';
import Label from '../../base/Label';
import InputText from '../../base/inputText';

const Texto = ({
                    Titulo="Texto",
                    Id="texto",
                    PlaceHolder="introduzca su Texto", 
                    Valor="", 
                    ValorSet=(valor)=>{
                        console.log("falta agregar la función para asignación texto.");
                    }
                } )=>{

    let [miValor, miValorSet] = useState(Valor);

    function actualizarTexto(nuevoValor){
        miValorSet(nuevoValor);
        ValorSet(nuevoValor);
    }

    return (
        <div className="w3-container">
        <Label Texto={Titulo} htmlFor={Id} />
        <InputText 
            Id={Id} 
            Tipo="text" 
            PlaceHolder={PlaceHolder} 
            Valor={miValor} 
            ValorSet={actualizarTexto}  
        />
    
    </div>

    );
}

Texto.propTypes = {
    Titulo: PropTypes.string.isRequired,
    Id : PropTypes.any.isRequired,
    PlaceHolder : PropTypes.string,
    Valor : PropTypes.string.isRequired,
    ValorSet: PropTypes.func    
}

export default Texto;