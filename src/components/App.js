import React from 'react';
import MyNavBar from './navigation/mynavbar';


export const UserContext = React.createContext();

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "usuario" : {
                "id":1,
                "nombre":"Andres",
                "apellido":"Kouvach"
            }
        }
    }

    render(){
        return (
            <div className="w3-container">
                <UserContext.Provider value={this.state.usuario}>
                <div className="w3-row">
                    <MyNavBar />
                </div>
                
                <div className="w3-row">
                    {this.props.children}                
                </div>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;
