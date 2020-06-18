import React from "react";
import Texto from "../intermedio/texto";
import Enviar from "../intermedio/boton/enviar";
import Form from "../base/Form";

const GrupoDetalle = (props) => {
  return (
    <Form OnSubmit={props.onSubmit} Id="grupoDetalle">
      <Texto
        Titulo="Nombre"
        Id="grupo"
        Valor={props.grupo.grupo}
        ValorSet={props.grupoHandler}
        Error={props.errors.grupo}
      />

      <Texto
        Titulo="Descripcion"
        Id="descripcion"
        Valor={props.grupo.descripcion}
        ValorSet={props.grupoHandler}
        Error={props.errors.descripcioin}
      />

      <br />
      <Enviar FormId="grupoDetalle" Texto="Agregar grupo" />
    </Form>
  );
};

export default GrupoDetalle;
