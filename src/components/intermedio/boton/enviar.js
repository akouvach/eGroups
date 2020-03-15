import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../base/Button';


const Enviar = ( {
                    buttonHandler = ()=>{
                                console.log("falta definir la funcion handler de enviar")
                    },
                    formId = "", 
                    clase = ""
                } )=>{

    let miClase = "w3-blue-grey w3-block " + clase
    return (
        <Button clase= {miClase} tipo="submit" texto="Enviar" formId={formId} buttonHandler={buttonHandler} />

    );
}

Enviar.propTypes = {
    buttonHandler: PropTypes.func,
    formId: PropTypes.string,
    clase: PropTypes.string
}

export default Enviar;