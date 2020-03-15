import React from 'react';
import PropTypes from 'prop-types';


const Button = ( {
                clase="w3-padding-small w3-blue w3-block", 
                texto="Enviar" , 
                habilitado=true, 
                tipo="button",
                formId = "",
                buttonHandler = ()=>{
                    console.log("falta definir el evento que recibe el click");
                } 
            } )=>{

    let miClase = "w3-btn " + clase;

    return (
        <button 
            type={tipo} 
            className={miClase} 
            disabled = {!habilitado} 
            buttonHandler = {buttonHandler}
            form = {formId}            
        >
            {texto}
        </button>
    );
}

Button.propTypes = {
    clase: PropTypes.string,
    texto: PropTypes.string.isRequired,
    habilitado: PropTypes.bool,
    tipo: PropTypes.string, 
    buttonHandler: PropTypes.func,
    formId: PropTypes.string
}

export default Button;