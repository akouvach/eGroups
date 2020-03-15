import React from 'react';
import MyNavBar from './navigation/mynavbar';


class App extends React.Component{

    render(){
        return (
            <div className="w3-container">
                <div className="w3-row">
                    <MyNavBar />
                </div>
                <div className="w3-row">
                    {this.props.children}                
                </div>
            </div>
        );
    }
}

export default App;
