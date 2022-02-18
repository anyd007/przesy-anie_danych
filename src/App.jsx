import React, { Component } from "react";
import Login from "./components/logowanie/Login";
import Regester from "./components/logowanie/Regester";
import { DatabaseUser } from "./components/database/DatabaseUser";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginActive: true,
      regActive: false,
      adminActive: false,
      loginData:[]
    };
  }
  handleShowReg = () => {
    const loginActive = this.state;
    const regActive = this.state;
    if (loginActive) {
      this.setState({ loginActive: false });
      this.setState({ regActive: true });
    }
  };
  handleHideReg = () => {
    const loginActive = this.state;
    const regActive = this.state;
    if (regActive) {
      this.setState({ loginActive: true });
      this.setState({ regActive: false });
    }
  };
  handleAdminLogin = () => {
    const adminActive = this.state;
    const loginActive = this.state;
    const regActive = this.state;
    if (adminActive) {
      this.setState({ adminActive: true });
      this.setState({ loginActive: false });
      this.setState({ regActive: false });
    }
  };
  handleAdminExit = () => {
    const adminActive = this.state;
    const loginActive = this.state;
    if (adminActive) {
      this.setState({ adminActive: false });
      this.setState({ loginActive: true });
    }
  };
  handleGetData = (val) =>{   //przypisywanie danych z logowania do pustej tablicy
    this.setState({
        loginData: val
    })
  }

  render() {
    let {loginData} = this.state
    const { loginActive } = this.state;
    const { adminActive } = this.state;
    const { regActive } = this.state;
    return (
      <div className="app">
        <div className="login">
          <div className="container">
            {loginActive && (
              <Login
                onRegestry={() => this.handleShowReg()}
                odAdminLogin={() => this.handleAdminLogin()}
                sentData={this.handleGetData} //przyjmowanie danych z komponentu dziecko login.jsx
              />
            )}
            {regActive && (
              <Regester onHideRegestry={() => this.handleHideReg()} />
            )}
          </div>
        </div>
        <div className="database">
          <div className="dbContener">
            {adminActive && (
              <DatabaseUser onExitAdminDB={() => this.handleAdminExit()}
                getDataFromLogin={loginData}/>  //wysłanie stanu przekazanego z login.jsx do databaseuser
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
