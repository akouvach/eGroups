import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Label from '../../base/Label';
import Select from '../../base/Select';
import BD from '../../context/bd';
import Loading from '../loading';


const Pais = ( {
                Titulo="Pais",
                Id="pais",
                Valor="",
                ValorSet=()=>console.log("falta definir la función para actualizar pais")
            } )=>{

    let [isLoading, isLoadingSet]=useState(false);
    let [pais, paisSet]=useState(Valor)
    let [paises, paisesSet]=useState([]);

    
    useEffect( () => {
        console.log("ejecutando useEffect");
        isLoadingSet(true);

        // Si quisiera mandar filtros debería mandar un segundo parámetro a BD.traer
        // con la siguiente información:
        // ,[{"field":"id", "value":["AR", "BR", "CL"]}]

        BD.traer("paises")
        .then( (data)=>{
            paisesSet(data);
            console.log("datos traidos en useEffect", data);
            isLoadingSet(false);
        });
        
    }, []);


    function actualizarValor(nuevoValor){
        paisSet(nuevoValor);
        ValorSet(nuevoValor);
    }

    if(isLoading){
        return (
            <Loading />
        )

    } else {
        return (

            <div className="w3-container">
                <Label 
                    Texto={Titulo} 
                    HtmlFor={Id}
                />
                <Select  
                    Id={Id} 
                    Valor={pais}
                    ValorSet={actualizarValor}
                    Valores={paises}
                />

            </div>

        );
    }
}

Pais.propTypes = {
    Titulo: PropTypes.string,
    Id: PropTypes.string.isRequired,
    Valor: PropTypes.string,
    ValorSet: PropTypes.func
}

export default Pais;