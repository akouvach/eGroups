import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../base/Button';


const Enviar = ( {
                    FormId = "", 
                    Clase = "w3-wide w3-margin-top"
                } )=>{

   return (
        <Button 
            Clase={Clase} 
            Tipo="submit" 
            Texto="Enviar" 
            FormId={FormId}  
        />
    );
}

Enviar.propTypes = {
    FormId: PropTypes.string.isRequired,
    Clase: PropTypes.string
}

export default Enviar;