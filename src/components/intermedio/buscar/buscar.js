import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../base/Form';
import InputText from '../../base/inputText';

const Buscar = ( {Id=""} )=>{
    return (
        <Form >
            {Id}
            <InputText />
        </Form>

    );
}

Buscar.propTypes = {
    Id:PropTypes.string
}   

export default Buscar ;