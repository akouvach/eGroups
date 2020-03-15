import React from 'react';
import InputText from '../base/inputText';


const Contacto = ()=>{
    return (
        <div>
          
<div className="w3-container w3-teal">
  <h2>Contacto</h2>
</div>
 
 <InputText type="password" id="uno" />
<div className="w3-row w3-section">
  <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-user"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="first" type="text" placeholder="Nombre" />
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-user"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="last" type="text" placeholder="Apellido" />
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="email" type="text" placeholder="Email" />
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-phone"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="phone" type="text" placeholder="Telefono" />
    </div>
</div>

<div className="w3-row w3-section">
  <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-pencil"></i></div>
    <div className="w3-rest">
      <input className="w3-input w3-border" name="message" type="text" placeholder="Mensaje" />
    </div>
</div>

<button className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">Enviar</button>



</div>
    );
}

export default Contacto;