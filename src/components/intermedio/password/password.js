import React, {useState} from 'react';
import Label from '../../base/Label';
import InputText from '../../base/inputText';
import PropTypes from 'prop-types';

const Password = ( {
        Titulo="Password",
        Id="password",
        PlaceHolder="Introduzca su contraseña", 
        Valor="", 
        ValorSet=(valor)=>{
            console.log("falta agregar la función para asignación en password.");
        }
    } )=>{

    let [password, passwordSet] = useState(Valor);

    function actualizarPassword(nuevoValor){
        passwordSet(nuevoValor);
        ValorSet(nuevoValor);
    }

    return (
        <div className="w3-container">
            <Label Texto={Titulo} HtmlFor={Id} />
            <InputText 
                Id={Id} 
                Tipo="password"
                PlaceHolder={PlaceHolder} 
                Valor={password} 
                ValorSet={actualizarPassword}  
            />
        </div>

    );
}

Password.propTypes = {
    Titulo: PropTypes.string,
    Id: PropTypes.any.isRequired,
    PlaceHolder: PropTypes.string,
    Valor : PropTypes.string.isRequired,
    ValorSet: PropTypes.func.isRequired
}

export default Password;