import React from 'react';
import { Route, BrowserRouter as ReactRouter, Switch} from 'react-router-dom';
import Inicio from './components/inicio/inicio';
import Login from './components/login/login';
import Registro from './components/login/registro';
import Contacto from './components/inicio/contacto';
import Grupos from './components/grupos/grupos';
import Buscar from './components/intermedio/buscar';
import MiCanasta from './components/micanasta';


import App from './components/App';

class Router extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:false,
            usuarioId: null,
            email:"",
            nombre:"",
            apellido:""
        }
    }

    signedInRoutes(){
        if(this.state.isLoggedIn){
            return (
                <Route to="/grupos/agregar" render={()=>{
                    return (<h1> Agregar grupos</h1>);
                }}>

                </Route>
            );
        }
    }

    home(){
        if(this.state.isLoggedIn)
            return MiCanasta;
        else    
            return Inicio;
    }

    render(){
        return (
            <ReactRouter>
                <App>
                    <div className="w3-row">
                        <Switch>
                            <Route exact path="/" component={this.home()}></Route>
                            <Route exact path="/login" component={Login}></Route>   
                            <Route exact path="/registro" component={Registro}></Route>   
                            <Route exact path="/contacto" component={Contacto}></Route>   
                            <Route exact path="/grupos" component={Grupos}></Route>   
                            <Route exact path="/buscar" component={Buscar}></Route>   
                            {this.signedInRoutes()}
                        </Switch>

                    </div>

                </App>

            
            </ReactRouter>
        )
    }
}

export default Router;
