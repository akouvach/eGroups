import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
                formId="", 
                formHandler=()=>{
                    console.log("falta definir el handler del formulario");
                },
                children
            })=>{
    return (
        <form id={formId} onSubmit={formHandler}>
            {children}
        </form>

    );
}

Form.propTypes = {
    formId : PropTypes.string.isRequired,
    formHandler: PropTypes.func.isRequired
}

export default Form;