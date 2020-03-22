import React, {Component} from 'react';
import Residencia from '../intermedio/residencia';
import Texto from '../intermedio/texto';
import Email from '../intermedio/email';
import Password from '../intermedio/password';
import Enviar from '../intermedio/boton/enviar';
import Form from '../base/Form';

class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:0,
            nombre:"",
            apellido:"",
            email:"",
            pass:"",
            pais:"2",
            estado:"",
            ciudad:"",
            fecha_nac: (new Date("1972-12-30")).toJSON()
        }

    }

    verificarFormulario = (ev)=>{
        ev.preventDefault();
        console.log("verificando datos...");
        console.log(this.state);

    }

    // componentDidMount(){
    //     this.setState({
    //         email:this.context.nombre,
    //         password:this.context.apellido
    //     });
        
    // }
    
    render(){
        return (
            <div className="w3-container">

                <div className="w3-form "> 

                    <div className="w3-container w3-teal">
                        <h2>Registro</h2>
                    </div>

                    <Form Id="RegistroUsuario" OnSubmit={ this.verificarFormulario }>


                        <Texto 
                            Titulo="Nombre" 
                            Id="registro_nombre" 
                            PlaceHolder="Ingrese su nombre" 
                            Valor={this.state.nombre} 
                            ValorSet={(ev)=>this.setState({"nombre":ev})}
                        />
                        
                        <Texto 
                            Titulo="Apellido" 
                            Id="registro_apellido" 
                            PlaceHolder="Ingrese su correo" 
                            Valor={this.state.apellido} 
                            ValorSet={(ev)=>this.setState({"apellido":ev})}
                        />

                        <Email 
                            Titulo="Email"
                            Id="registro_email" 
                            PlaceHolder="Ingrese su correo" 
                            Valor={this.state.email} 
                            ValorSet={(ev)=>this.setState({"email":ev})}
                        />

                        <Password 
                            Titulo="Contraseña"
                            Id="registro_password" 
                            PlaceHolder="Ingrese su contraseña" 
                            Valor={this.state.pass} 
                            ValorSet={(ev)=>this.setState({"pass":ev})}
                        />


                        <Residencia 
                            PaisId="pais"
                            PaisTitulo="Pais"
                            PaisValor={this.state.pais}
                            PaisSet={(ev)=>this.setState({"pais":ev})}
                        />

                        

                        {/* {this.state.nombre} / 
                        {this.state.apellido} / 
                        {this.state.pass} / 
                        {this.state.fecha_nac} / 
                        {this.state.email} / 
                        {this.state.pais} / 
                        {this.state.estado} / 
                        {this.state.ciudad}  */}
                        
                     


                        <br />


                        <Enviar FormId="RegistroUsuario" />
                
                    </Form>

                
                </div>


            </div>
        )
    }

}

   
export default Registro
