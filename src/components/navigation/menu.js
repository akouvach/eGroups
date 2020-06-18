import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../App";

const Login = (uc) => {
  console.log("entre a login");
  if (uc.nombre) {
    return (
      <div className="w3-dropdown-hover w3-right">
        <button className="w3-button"> {uc.nombre} </button>{" "}
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <Link className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </Link>
          <Link className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></Link>
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
          <Link className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </Link>
          <Link className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></Link>
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
          <Link className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </Link>
          <Link className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></Link>
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
          <Link className="w3-bar-item w3-button" to="/userSettings">
            Configuracion
          </Link>
          <Link className="w3-bar-item w3-button" to="/avatar">
            Avatar
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to="/login"
        className="w3-bar-item w3-button w3-mobile w3-right"></Link>
    );
  }
};

const Menu = () => {
  const userContext = useContext(UserContext);

  console.log("datsos del usuario", userContext);

  return (
    <div className="w3-nav">
      <div className="w3-bar w3-light-grey w3-border">
        <Link to="/" className="w3-bar-item w3-button w3-mobile">
          <button className="w3-button w3-wide w3-large"> eGroup </button>
        </Link>
        {Login(userContext)}
        {MenuPersonal(userContext)}
        {MiCanasta(userContext)}
        {Notificaciones(userContext)}

        <Link to="/buscar" className="w3-bar-item w3-button w3-mobile w3-right">
          <i className="material-icons"> search </i>{" "}
        </Link>
        <Link to="/grupos" className="w3-bar-item w3-button w3-mobile w3-right">
          Grupos
        </Link>
        <Link
          to="/contacto"
          className="w3-bar-item w3-button w3-mobile w3-right">
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Menu;
