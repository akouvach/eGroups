import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../base/Select';
import Label from '../../base/Label';

const Ciudad = ()=>{
    return (
        <div className="w3-container">
            <Label texto="Ciudad" />
            <Select />
        </div>
    );
}

Ciudad.propTypes = {

}

export default Ciudad;