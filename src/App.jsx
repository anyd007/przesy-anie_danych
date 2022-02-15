import React, { Component } from "react";
import Login from "./components/logowanie/Login";
import Regester  from "./components/logowanie/Regester";
import { DbAdmin } from "./components/database/Dbindex";
import './App.css'


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginActive: true,
            regActive: false,
            adminActive: false,
            
        
        }
    }
    handleShowReg = () =>{
        const loginActive = this.state;
        const regActive = this.state
        if(loginActive){
       this.setState({loginActive: false})
       this.setState({regActive:true})
        }
    }
    handleHideReg = () =>{
        const loginActive = this.state
        const regActive = this.state
        if(regActive){
            this.setState({loginActive:true})
            this.setState({regActive:false})
            
        }
        
    }
    handleAdminLogin=()=>{
        const adminActive = this.state
        const loginActive = this.state
        const regActive = this.state
        if(adminActive){
            this.setState({adminActive:true})
            this.setState({loginActive:false})
            this.setState({regActive:false})
        }
    }
    handleAdminExit = () =>{
        const adminActive = this.state
        const loginActive = this.state
        if(adminActive){
            this.setState({adminActive:false})
            this.setState({loginActive:true})
        }
    }


    render(){
        const {loginActive} = this.state
        const {adminActive} = this.state
        const {regActive} = this.state
        return(
         <div className="app">
            <div className="login">
                <div className="container">
                    {loginActive && <Login 
                    onRegestry={() => this.handleShowReg()}
                    odAdminLogin={()=>this.handleAdminLogin()}/>}
                    {regActive && <Regester
                    onHideRegestry={() => this.handleHideReg()}/>}
                </div>
            </div>
            <div className="database">
                <div className="dbContener">
                {adminActive && <DbAdmin
                    onExitAdminDB={()=>this.handleAdminExit()}/>}
                </div>
            </div>
        </div>
        )
    }
}



export default App;