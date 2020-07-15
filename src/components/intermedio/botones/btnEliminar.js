import React from "react";
import PropTypes from "prop-types";
import Button from "../../base/Button";
import { Link } from "react-router-dom";

const BtnEliminar = ({
  Clase = "w3-button w3-round w3-red ",
  Texto = " X ",
  Destino = null,
  HandleClick = () => {
    console.log("click no definido");
  },
}) => {
  return <Button Clase={Clase} Texto={Texto} OnClick={HandleClick} />;
};

BtnEliminar.propTypes = {
  Texto: PropTypes.string,
  Clase: PropTypes.string,
  Destino: PropTypes.string,
  HandleClick: PropTypes.func,
};

export default BtnEliminar;
