import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

const Grupos = ({
  filtro = "Esto es un filtro",
  usuarioId = "este es usuarioId",
}) => {
  let misGrupos = [
    {
      id: 1,
      nombre: "Scout",
      residencias: [
        { pais: "Argentina", Provincia: "Buenos Aires", ciudad: "ramos mejia" },
      ],
    },
    {
      id: 2,
      nombre: "zouk",
      residencias: [
        { pais: "Argentina", Provincia: "Buenos Aires", ciudad: "ramos mejia" },
      ],
    },
  ];

  useEffect(() => {
    console.log("me ejecuté");

    return () => {
      console.log("estoy saliendo");
    };
  }, []);

  return (
    <div className="w3-container">
      <div className="w3-container w3-teal">
        <h2>Grupos</h2>
        <Link to="/grupos/add">Agregar</Link>
      </div>

      <table className="w3-table w3-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Grupo</th>
          </tr>
        </thead>
        <tbody>
          {misGrupos.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>
                  <Link to={"/grupo/" + item.id}>{item.nombre}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grupos;
