import React, { useState, useEffect } from 'react';


// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()


const Grupo = ( {filtro = "Esto es un filtro", usuarioId = "este es usuarioId" } )=>{
    let misGrupos = [
        {
            "id":1, "nombre":"Scout", "residencias":[
                    {"pais":"Argentina", "Provincia": "Buenos Aires", "ciudad":"ramos mejia"}
                ]
        },
        {
            "id":2, "nombre":"zouk", "residencias":[
                    {"pais":"Argentina", "Provincia": "Buenos Aires", "ciudad":"ramos mejia"}
                ]
        },
    ];

    const [contador, contadorSet ] = useState(0);

    useEffect( ()=>{
        console.log("me ejecuté");
    
        return ()=>{
            console.log("estoy saliendo");
        };
    
    },[]);

    return (
        <div className="w3-container">
            <div className="w3-container w3-teal">
            <h2>Grupo Zouk</h2>
            </div>

            <h1>Blog</h1>

            <div className="w3-row">
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
                <div>
                    <header>Bruno - 1/2/2020</header>
                    <article>Creo que podemos armar algún proyecto para pintar las escuelas del barrio.  </article>
                </div>
            </div>

        </div>
        
    );


}


export default Grupo ;