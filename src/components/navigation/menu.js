import React from 'react';
import {Link } from 'react-router-dom';


const Menu=()=>{
    return (
        <div className="w3-nav">
            
            <div className="w3-bar w3-light-grey w3-border">
                <Link to="/" className="w3-bar-item w3-button w3-mobile">
                    <button className="w3-button w3-wide w3-large">eGroup</button>
                </Link>


                {/* <div className="w3-row-padding">
  <div className="w3-half">
    <label>First Name</label>
    <input className="w3-input w3-border" type="text" placeholder="Two" />
  </div>
  <div className="w3-half">
    <label>Last Name</label>
    <input className="w3-input w3-border" type="text" placeholder="Three" />
  </div>
</div> */}

                <Link to="/search" className="w3-bar-item w3-button w3-mobile w3-right">
                    <i className="material-icons">search</i>
                </Link>
    
                <div className="w3-dropdown-hover w3-right">
                    <button className="w3-button">Dropdown</button>
                    <div className="w3-dropdown-content w3-bar-block w3-card-4">
                        <a href="#" className="w3-bar-item w3-button">Link 1</a>
                        <a href="#" className="w3-bar-item w3-button">Link 2</a>
                        <a href="#" className="w3-bar-item w3-button">Link 3</a>
                    </div>
                </div>

                <Link to="/grupos" className="w3-bar-item w3-button w3-mobile w3-right">Grupos</Link>
                <Link to="/contacto" className="w3-bar-item w3-button w3-mobile w3-right">Contacto</Link>
                <Link to="/login" className="w3-bar-item w3-button w3-mobile w3-right">Login</Link>
            
            </div>

        </div>

    );
}

export default Menu;