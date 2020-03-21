import React from 'react';
import { Route, BrowserRouter as ReactRouter} from 'react-router-dom';
import Inicio from './components/inicio/inicio';
import Login from './components/login/login';
import Registro from './components/login/registro';
import Contacto from './components/inicio/contacto';
import Grupos from './components/grupos/grupos';



import App from './components/App';

class Router extends React.Component{

    render(){
        return (
            <ReactRouter>
                <App>
                    <div className="w3-row">

                            <Route exact path="/" component={Inicio}></Route>
                            <Route exact path="/login" component={Login}></Route>   
                            <Route exact path="/registro" component={Registro}></Route>   
                            <Route exact path="/contacto" component={Contacto}></Route>   
                            <Route exact path="/grupos" component={Grupos}></Route>   


                    </div>

                </App>

            
            </ReactRouter>
        )
    }
}

export default Router;
