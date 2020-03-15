import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../base/Label';

const Titulo1 = ({texto="completar", clase=""})=>{
    let miClase = "w3-teal w3-padding w3-block " + clase;
    return (
            <h1>
                <Label clase={miClase} texto={texto} />
            </h1>
    );

}

Titulo1.propTypes = {
    texto: PropTypes.string.isRequired,
    clase: PropTypes.string
}

export default Titulo1 ;