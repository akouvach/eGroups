import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { UserContext } from "../App";

const Login = (uc) => {
  console.log("entre a login");
  if (uc.nombre) {
    return (
      <div className="w3-dropdown-hover w3-right">
        <button className="w3-button"> {uc.nombre} </button>{" "}
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <NavLink className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </NavLink>
          <NavLink className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></NavLink>
    );
  }
};

const MenuPersonal = (uc) => {
  console.log("entre a mi menu especial");

  if (uc.nombre) {
    return (
      <div className="w3-dropdown-hover w3-right">
        <button className="w3-button"> Mi menu </button>{" "}
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <NavLink className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </NavLink>
          <NavLink className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></NavLink>
    );
  }
};

const MiCanasta = (uc) => {
  console.log("entre a Mi Canasta");

  if (uc.nombre) {
    return (
      <div className="w3-dropdown-hover w3-right">
        <button className="w3-button"> Mi Canasta </button>{" "}
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <NavLink className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </NavLink>
          <NavLink className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></NavLink>
    );
  }
};

const Notificaciones = (uc) => {
  console.log("entre a Notificaciones");

  if (uc.nombre) {
    return (
      <div className="w3-dropdown-hover w3-right">
        <button className="w3-button"> Notificaciones </button>{" "}
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <NavLink className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </NavLink>
          <NavLink className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></NavLink>
    );
  }
};

const Menu = () => {
  const userContext = useContext(UserContext);

  console.log("datsos del usuario", userContext);

  const activeStyle = { color: "red" };

  return (
    <div className="w3-nav">
      <div className="w3-bar w3-light-grey w3-border">
        <NavLink to="/" className="w3-bar-item w3-button w3-mobile">
          <button className="w3-button w3-wide w3-large"> eGroup </button>
        </NavLink>
        {Login(userContext)}
        {MenuPersonal(userContext)}
        {MiCanasta(userContext)}
        {Notificaciones(userContext)}

        <NavLink
          to="/buscar"
          activeStyle={activeStyle}
          className="w3-bar-item w3-button w3-mobile w3-right">
          <i className="material-icons"> search </i>{" "}
        </NavLink>
        <NavLink
          to="/grupos"
          activeStyle={activeStyle}
          className="w3-bar-item w3-button w3-mobile w3-right">
          Grupos
        </NavLink>
        <NavLink
          to="/contacto"
          activeStyle={activeStyle}
          className="w3-bar-item w3-button w3-mobile w3-right">
          Contacto
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
