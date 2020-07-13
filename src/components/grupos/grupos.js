import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as gruposApi from "../../api/gruposApi";
import BtnAgregar from "../intermedio/botones/btnAgregar";
import Header from "../base/Header";
import Footer from "../base/Footer";

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

const Grupos = ({
  filtro = "Esto es un filtro",
  usuarioId = "este es usuarioId",
}) => {
  const [grupos, gruposSet] = useState([]);

  useEffect(() => {
    console.log("me ejecuté dentro de grupos.js");
    gruposApi.getAll().then((data) => {
      gruposSet(data);
      // console.log(data);
    });

    return () => {
      console.log("estoy saliendo");
    };
  }, []);

  return (
    <div className="w3-container">
      <div className="w3-container w3-teal">
        <div className="w3-cell-row w3-mobile">
          <div className="w3-threequarter">
            <h2>Grupos</h2>
          </div>
          <div className="w3-rest w3-right">
            <h3>
              <BtnAgregar Destino="/grupos/add" />
            </h3>
          </div>
        </div>
      </div>
      <div className="w3-container">
        {grupos.map((item, index) => {
          return (
            <div
              className="w3-container w3-card-4 w3-third w3-padding"
              key={item.id}
            >
              <Header Clase="w3-container w3-blue ">
                <h1>
                  <Link to={"/grupo/" + item.id}>{item.grupo}</Link>
                </h1>
              </Header>

              <div className="w3-container">
                <p>{item.descripcion}</p>
              </div>

              <Footer Clase="w3-container w3-blue">
                <h5>{item.tags}</h5>
              </Footer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grupos;
