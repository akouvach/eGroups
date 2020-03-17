import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Email from '../intermedio/email';
import Password from '../intermedio/password';
import Titulo1 from '../intermedio/titulos/titulo1';
import Enviar from '../../components/intermedio/boton/enviar';
import Form from '../../components/base/Form';
import Usuario from '../usuario/usuario';
import Encrypt from '../generales/encrypt';

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

    componentDidMount(){
        this.setState({
            email:"yourEmail@yourself.com",
            password:""
        });
        
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

                <div className="w3-row">

                    <div className="w3-form">

                        <Titulo1 texto="Ingrese" />

                        <Form formId="uno" formHandler={this.verificarContrasenia}>
                            
                            <Email 
                                Id="email" 
                                Tipo="email" 
                                PlaceHolder="Ingrese su correo" 
                                Valor={this.state.email} 
                                ValorSet={this.actualizarEmail}
                            />

                            <Password 
                                Id="password" 
                                Tipo="password" 
                                PlaceHolder="Ingrese su contraseña" 
                                Valor={this.state.password} 
                                ValorSet={this.actualizarPassword}
                            />

                            <Enviar formId="uno" clase="w3-wide w3-margin-top" />
                    
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
