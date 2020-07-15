import React from "react";
import Menu from "./menu";
import { useUsuario } from "../../context/usuarioContext";

const MyNavBar = (props) => {
  // console.log("use usuario", useUsuario());
  const { usuario, cargandoUsuario, setUsuario } = useUsuario();

  console.log(usuario, cargandoUsuario);

  function actualizarUsuario() {
    console.log("voy a actualizar usuario");
    setUsuario({ id: 1, nombre: "Andres" });
  }

  return (
    <div className="w3-padding">
      {usuario && usuario.id ? "esta logonead" : "no esta logoneado"}
      <button onClick={actualizarUsuario}>act</button>
      <Menu />
    </div>
  );
};

export default MyNavBar;
