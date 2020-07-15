import React from "react";
import MyNavBar from "./navigation/mynavbar";

import { UsuarioProvider } from "../context/usuarioContext";

class App extends React.Component {
  render() {
    return (
      <div className="w3-container">
        <UsuarioProvider>
          <div className="w3-row">
            <MyNavBar />
          </div>

          <div className="w3-row">{this.props.children}</div>
        </UsuarioProvider>
      </div>
    );
  }
}

export default App;
