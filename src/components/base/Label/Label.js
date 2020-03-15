import React from 'react';
import PropTypes from 'prop-types';

const Label = ( {htmlFor = "", texto = "completar", clase=""} )=>{
    return (
        <label htmlFor={htmlFor} className={clase} > {texto} </label>
    );
}

Label.propTypes = {
    htmlFor : PropTypes.string,
    texto : PropTypes.string.isRequired,
    clase : PropTypes.string
}

export default Label;