import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../base/Label';

const Titulo3 = ({texto})=>{
    return (
        <div className="w3-container">
            <h3>
                <Label clase="w3-teal w3-padding" texto={texto} />
            </h3>
        </div>
    );

}

Titulo3.propTypes = {
    texto: PropTypes.string.isRequired
}

export default Titulo3 ;