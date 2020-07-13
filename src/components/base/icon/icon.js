import React from "react";
import PropTypes from "prop-types";

const Icon = ({ Nombre = "add" }) => {
  return <i className="material-icons">{Nombre}</i>;
};

Icon.propTypes = {
  Nombre: PropTypes.string.isRequired,
};

export default Icon;
