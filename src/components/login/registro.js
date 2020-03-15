import React, {Component} from 'react';

class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            pais:"",
            ciudad:"",
            date: new Date()
        }

    }

    verificarContrasenia = (ev)=>{
        ev.preventDefault();
        console.log("verificando contrasenia", this.state.email, this.state.password);
        this.setState({
            email:"",
            password:""
        });
    }

    componentDidMount(){
        this.setState({
            email:this.context.nombre,
            password:this.context.apellido
        });
        
    }
    
    render(){
        return (
<div className="w3-container">


<div className="w3-form">

<div className="w3-container w3-teal">
  <h2>Registro</h2>
</div>
                <form onSubmit={ this.verificarContrasenia }>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input className="w3-input w3-animate-input" value={this.state.email} type="email" id="email" onChange={ (ev)=>{
                       this.setState({email:ev.target.value});

                    }} placeholder="email"/>
                    <label htmlFor="password">Constraseña</label>
                    <br />
                    <input className="w3-input w3-animate-input" value={this.state.password} type="password" onChange= { (ev)=>{
                        this.setState({password:ev.target.value})
                    }} id="password" placeholder="contrasenia" />
                    <br />

                    <label htmlFor="pais">Pais</label>
                    <input className="w3-input w3-animate-input" value={this.state.password} type="text" onChange= { (ev)=>{
                        this.setState({pais:ev.target.value})
                    }} id="pais" placeholder="pais" />
                    <br />

                    <label htmlFor="ciudad">Ciudad</label>
                    
                    <input className="w3-input w3-animate-input" value={this.state.password} type="text" onChange= { (ev)=>{
                        this.setState({ciudad:ev.target.value})
                    }} id="ciudad" placeholder="ciudad" />
                    <br />


                    <br />
                    <input className="w3-btn w3-blue-grey" type="submit" value="Crear cuenta" />
              
                </form>

                
            </div>


</div>
        )
    }

}

   
export default Registro
