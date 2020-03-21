import React, {useState} from 'react';
import Label from '../../base/Label';
import InputText from '../../base/inputText';
import PropTypes from 'prop-types';

const Email = ( {
        Titulo="Email",
        Id="email",
        PlaceHolder="introduzca su eMail", 
        Valor="", 
        ValorSet=()=>console.log("falta agregar la función para asignación en email.")
    } )=>{

    let [email, emailSet] = useState(Valor);

    function actualizarEmail(nuevoValor){
        emailSet(nuevoValor);
        ValorSet(nuevoValor);
    }

    return (
        <div className="w3-container">
            <Label Texto={Titulo} HtmlFor={Id} />
            <InputText 
                Id={Id} 
                Tipo="email" 
                PlaceHolder={PlaceHolder} 
                Valor={email} 
                ValorSet={actualizarEmail}  
            />
        </div>
    );
}

Email.propTypes = {
    Titulo: PropTypes.string.isRequired,
    Id : PropTypes.any.isRequired,
    PlaceHolder : PropTypes.string,
    Valor : PropTypes.string.isRequired,
    ValorSet: PropTypes.func
}

export default Email;