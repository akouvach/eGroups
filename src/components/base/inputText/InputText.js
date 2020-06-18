import React from "react";
import PropTypes from "prop-types";

const InputText = ({
  Tipo = "Text",
  Id = "uno",
  PlaceHolder = "Placeholder",
  Valor = "",
  ValorSet = () => {
    console.log("falta definir funcion set de input text");
  },
}) => {
  //   function cambiarValor(nuevoValor) {
  //     //console.log("cambiando valor", nuevoValor);
  //     miValorSet(nuevoValor);
  //     ValorSet(nuevoValor);
  //   }

  return (
    <input
      className="w3-input"
      type={Tipo}
      id={Id}
      name={Id}
      placeholder={PlaceHolder}
      value={Valor}
      onChange={ValorSet}
    />
  );
};

InputText.propTypes = {
  Tipo: PropTypes.string,
  Id: PropTypes.any,
  PlaceHolder: PropTypes.string,
  Valor: PropTypes.any.isRequired,
  ValorSet: PropTypes.func.isRequired,
};

export default InputText;
