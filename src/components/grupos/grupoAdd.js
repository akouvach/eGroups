import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Titulo1 from "../intermedio/titulos/titulo1";
import GrupoDetalle from "./grupoDetalle";
import { toast } from "react-toastify";

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

const GrupoAdd = (props) => {
  const [errors, setErrors] = useState({});
  const [grupo, setGrupo] = useState({
    grupo: "",
    descripcion: "",
    idCreador: "",
    idOrganigrama: "",
    tipo: "",
    tags: "",
  });

  function formIsValid() {
    const _errors = {};
    if (!grupo.grupo) _errors.grupo = "Se requiere un nombre de grupo";
    if (!grupo.descripcion)
      _errors.descripcion = "Se requiere una descripción del grupo";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleChangeGrupo(evt) {
    const { target } = evt;
    setGrupo({ ...grupo, [target.name]: target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!formIsValid()) {
      return;
    }
    console.log("voy a guardar", grupo);
    toast.success("grupo grabado");
    props.history.push("/grupos");
  }

  return (
    <div className="w3-container">
      <div className="w3-container w3-teal">
        <Titulo1 Texto="Grupos - Agregar" />
      </div>
      <GrupoDetalle
        grupo={grupo}
        grupoHandler={handleChangeGrupo}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default GrupoAdd;
