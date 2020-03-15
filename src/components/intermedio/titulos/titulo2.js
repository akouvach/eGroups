import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../base/Label';

const Titulo2 = ({texto})=>{
    return (
        <div className="w3-container">
            <h2>
                <Label clase="w3-teal w3-padding" texto={texto} />
            </h2>
        </div>
    );

}

Titulo2.propTypes = {
    texto: PropTypes.string.isRequired
}

export default Titulo2 ;