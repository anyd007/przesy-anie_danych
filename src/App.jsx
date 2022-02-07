import React, { Component } from "react";
import { Login } from "./components/logowanie/Index";
import { Regester } from "./components/logowanie/Index";
import './App.css'


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginActive: true,
            regActive: false
        
        }
    }
    handleShowReg = () =>{
        const loginActive = this.state;
        if(loginActive){
       this.setState({loginActive: false})
        }
    }
    handleHideReg = () =>{
        const loginActive = this.state
        if(loginActive){
            this.setState({loginActive:true})
            
        }

    }
    handleAdminLogin=()=>{
        console.log('jestes adminem');
    }
    


    render(){
        const {loginActive} = this.state
        return(
         <div className="App">
            <div className="login">
                <div className="container">
                    {loginActive && <Login containerRef={ref => this.current = ref}
                    onRegestry={() => this.handleShowReg()}
                    odAdminLogin={()=>this.handleAdminLogin()}/>}
                    {!loginActive && <Regester containerRef={ref => this.current = ref}
                    onHideRegestry={() => this.handleHideReg()}/>}
                </div>
            </div>
        </div>
        )
    }
}



export default App;