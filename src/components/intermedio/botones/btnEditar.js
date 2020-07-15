import React from "react";
import PropTypes from "prop-types";
import Button from "../../base/Button";
import { Link } from "react-router-dom";

const BtnEditar = ({
  Clase = "w3-button w3-round w3-black ",
  Texto = "...",
  Destino = "/",
}) => {
  return (
    <Link to={Destino}>
      <Button Clase={Clase} Texto={Texto} />
    </Link>
  );
};

BtnEditar.propTypes = {
  Texto: PropTypes.string,
  Clase: PropTypes.string,
  Destino: PropTypes.string.isRequired,
};

export default BtnEditar;
