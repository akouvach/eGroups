import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Email from '../intermedio/email';
import Password from '../intermedio/password';
import Titulo1 from '../intermedio/titulos/titulo1';
import Enviar from '../../components/intermedio/boton/enviar';
import Form from '../../components/base/Form';
import Usuario from '../usuario/usuario';
import Encrypt from '../generales/encrypt';
import Counter from '../base/counter';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.actualizarEmail = this.actualizarEmail.bind(this);
        this.actualizarPassword = this.actualizarPassword.bind(this);

    }

    verificarContrasenia = (ev)=>{
        ev.preventDefault();
        console.log("verificando contrasenia", this.state.email, this.state.password);
        //console.log("datos del usuario ", Usuario.get());
        let hash = Encrypt.hash(this.state.password);
        console.log("passsord:", this.state.password, "Hash: ", hash);
        setTimeout(()=>{
            console.log("Comparacion: ", Encrypt.compare(this.state.password, hash));
        }, 5 * 1000);
        

    }


    actualizarEmail(valor){
        //console.log("estoy ejecutando la actualización:", valor);
        this.setState({
            email:valor
        });

    }
    actualizarPassword(valor){
        //console.log("estoy ejecutando la actualización:", valor);
        this.setState({
            password:valor
        });

    }

    render(){
        return (    

            <div className="w3-container">

                <Counter />
                
                <div className="w3-row">

                    <div className="w3-form">

                        <Titulo1 Texto="Ingrese" />

                        <Form Id="uno" OnSubmit={this.verificarContrasenia}>
                            
                            <Email 
                                Titulo="Email"
                                Id="email" 
                                PlaceHolder="Ingrese su correo" 
                                Valor={this.state.email} 
                                ValorSet={this.actualizarEmail}
                            />

                            <Password 
                                Titulo="Contraseña"
                                Id="password" 
                                PlaceHolder="Ingrese su contraseña" 
                                Valor={this.state.password} 
                                ValorSet={this.actualizarPassword}
                            />

                            <Enviar FormId="uno" />
                    
                        </Form>


                                    
                    </div>

                </div>


                <div className="w3-row w3-padding">
                        ¿No se encuentra registrado? <Link to="/registro">Regístrese</Link>. 

                </div>

            </div>

        )
    }

}

   
export default Login
