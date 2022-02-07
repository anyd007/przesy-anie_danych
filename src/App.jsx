import React, { Component } from "react";
import { Login } from "./components/logowanie/Index";
import { Regester } from "./components/logowanie/Index";
import { DbAdmin } from "./components/database/DbAdmin";
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
         <div className="App">
            <div className="login">
                <div className="container">
                    {loginActive && <Login containerRef={ref => this.current = ref}
                    onRegestry={() => this.handleShowReg()}
                    odAdminLogin={()=>this.handleAdminLogin()}/>}
                    {regActive && <Regester containerRef={ref => this.current = ref}
                    onHideRegestry={() => this.handleHideReg()}/>}
                    {adminActive && <DbAdmin
                    onExitAdminDB={()=>this.handleAdminExit()}/>}
                </div>
            </div>
        </div>
        )
    }
}



export default App;