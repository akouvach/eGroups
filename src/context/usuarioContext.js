import React, { useContext, useEffect, useState, useMemo } from "react";
import { getToken } from "../api/apiUtils";

const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
  const [usuario, usuarioSet] = useState(null);
  const [cargandoUsuario, cargandoUsuarioSet] = useState(true);

  useEffect(() => {
    async function cargarUsuario() {
      console.log("cargando token");
      try {
        let token = getToken();
        if (token) {
          //cargo los datos del usuario
          console.log("recupere los datos de la sesion", token);
          usuarioSet(token);
          return true;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }

    cargarUsuario();
  }, []);

  async function login(email, password) {
    const { data } = await login();
  }

  const value = useMemo(() => {
    return {
      usuario,
      cargandoUsuario,
      setUsuario: (_usuario) => {
        console.log(_usuario);
        usuarioSet(_usuario);
      },
    };
  }, [usuario, cargandoUsuario]);

  return <UsuarioContext.Provider value={value} {...props} />;
}

export function useUsuario() {
  const context = React.useContext(UsuarioContext);
  if (!context) {
    throw new Error(
      "useUsuario debe estar dentro del proveedor UsuarioContext"
    );
  }
  return context;
}
