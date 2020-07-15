import React from "react";
import PropTypes from "prop-types";
import Label from "../../base/Label";

const Loading = ({ isLoading = false }) => {
  return (
    <div className="w3-container">
      {isLoading && <Label Texto="Cargando..." />}
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
