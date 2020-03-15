import React , { useState } from 'react';
import PropTypes from 'prop-types';

const InputText = ( {
                        Tipo = "Text" , 
                        Id = "uno", 
                        PlaceHolder="Placeholder",
                        Valor = "",
                        ValorSet=()=>{
                            console.log("falta definir funcion set de input text")
                        }
                    }  
    )=>{
    
    let [miValor, miValorSet] = useState(Valor);

    function cambiarValor(nuevoValor){
        //console.log("cambiando valor", nuevoValor);
        miValorSet(nuevoValor);
        ValorSet(nuevoValor);
    }

    return (
        <input 
            className="w3-input"
            type={Tipo} 
            id={Id}  
            placeholder={PlaceHolder}
            value={miValor}
            onChange={(ev)=>cambiarValor(ev.target.value)}

        />
    )
}

InputText.propTypes = {
    tipo: PropTypes.string,
    Id: PropTypes.any,
    PlaceHolder: PropTypes.string,
    miValor: PropTypes.any.isRequired,
    ValorSet: PropTypes.func.isRequired
}

export default InputText;