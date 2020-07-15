import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Titulo1 from "../intermedio/titulos/titulo1";

import Texto from "../intermedio/texto";
import TextArea from "../intermedio/textarea";
import BtnEnviar from "../intermedio/botones/btnEnviar";
import Form from "../base/Form";

import { toast } from "react-toastify";
import * as gruposApi from "../../api/gruposApi";
// import { searchconsole } from "googleapis/build/src/apis/searchconsole";

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

const GrupoAdd = (props) => {
  const [errors, setErrors] = useState({});
  const [grupo, setGrupo] = useState({
    grupo: "",
    descripcion: "",
    idCreador: 1,
    idOrganigrama: 0,
    tipo: "U",
    tags: "",
  });

  useEffect(() => {
    console.log("param.." + props.match.params.idGrupo);
    if (props.match.params.idGrupo) {
      //voy a buscar los datos de este grupo
      gruposApi.getByPrim(props.match.params.idGrupo).then((data) => {
        setGrupo(data);
        console.log(data);
      });
    }
  }, [props.match.params.idGrupo]);

  function formIsValid() {
    const _errors = {};
    console.log("validando...", grupo);
    if (!grupo.grupo) _errors.grupo = "Se requiere un nombre de grupo";
    if (!grupo.descripcion)
      _errors.descripcion = "Se requiere una descripción del grupo";
    if (!grupo.tags) _errors.tags = "Se requiere algun tag (separados por ;)";
    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleChangeGrupo(evt) {
    const { target } = evt;
    // console.log(target.name, target.value);
    setGrupo({ ...grupo, [target.name]: target.value });
    // console.log(grupo);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!formIsValid()) {
      return;
    }
    console.log("voy a guardar", grupo);

    gruposApi.guardar(grupo).then(() => {
      toast.success("grupo grabado");
      props.history.push("/grupos");
    });
  }

  return (
    <div className="w3-container">
      <div className="w3-container w3-teal">
        <Titulo1 Texto="Grupos - Agregar" />
      </div>

      <Form OnSubmit={handleSubmit} Id="grupoDetalle">
        <Texto
          Titulo="Nombre"
          Id="grupo"
          Valor={grupo.grupo}
          ValorSet={handleChangeGrupo}
          Error={errors.grupo}
        />

        <Texto
          Titulo="Descripcion"
          Id="descripcion"
          Valor={grupo.descripcion}
          ValorSet={handleChangeGrupo}
          Error={errors.descripcion}
        />

        <TextArea
          Titulo="Tags"
          PlaceHolder="Tags asociados a este grupo.  Palabras claves asociadas al grupo (separadas por ;) "
          Id="tags"
          Valor={grupo.tags}
          ValorSet={handleChangeGrupo}
          Error={errors.tags}
        />

        <br />
        {grupo.idGrupo}
        <BtnEnviar
          FormId="grupoDetalle"
          Texto={grupo.id ? "Modificar" : "Agregar"}
        />
      </Form>
    </div>
  );
};

export default GrupoAdd;
