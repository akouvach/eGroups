import React from "react";
import { Route, BrowserRouter as ReactRouter, Switch } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import Login from "./components/login/login";
import Registro from "./components/login/registro";
import Contacto from "./components/inicio/contacto";

import Grupos from "./components/grupos/grupos";
import Grupo from "./components/grupos/grupo";
import GrupoAdd from "./components/grupos/grupoAdd";

import Buscar from "./components/intermedio/buscar";
import MiCanasta from "./components/micanasta";
import NotFoundPage from "./components/navigation/NotFoundPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./components/App";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      usuarioId: null,
      email: "",
      nombre: "",
      apellido: "",
    };
  }

  signedInRoutes() {
    if (this.state.isLoggedIn) {
      return (
        <Route
          to="/grupos/agregar"
          render={() => {
            return <h1> Agregar grupos</h1>;
          }}
        ></Route>
      );
    }
  }

  home() {
    if (this.state.isLoggedIn) return MiCanasta;
    else return Inicio;
  }

  render() {
    return (
      <ReactRouter>
        <ToastContainer autoClose={3000} />
        <App>
          <div className="w3-row">
            <Switch>
              <Route exact path="/" component={this.home()}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/registro" component={Registro}></Route>
              <Route exact path="/contacto" component={Contacto}></Route>

              <Route exact path="/grupos/add" component={GrupoAdd}></Route>
              <Route exact path="/grupos" component={Grupos}></Route>
              <Route exact path="/grupo/:idGrupo" component={Grupo}></Route>

              <Route exact path="/buscar" component={Buscar}></Route>
              {this.signedInRoutes()}
              <Route component={NotFoundPage}></Route>
            </Switch>
          </div>
        </App>
      </ReactRouter>
    );
  }
}

export default Router;
