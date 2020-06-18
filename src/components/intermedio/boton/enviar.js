import React from "react";
import PropTypes from "prop-types";
import Button from "../../base/Button";

const Enviar = ({
  FormId = "",
  Clase = "w3-button w3-black w3-round-xxlarge",
  Texto = "Enviar",
}) => {
  return <Button Clase={Clase} Tipo="submit" Texto={Texto} FormId={FormId} />;
};

Enviar.propTypes = {
  FormId: PropTypes.string.isRequired,
  Texto: PropTypes.string,
  Clase: PropTypes.string,
};

export default Enviar;
