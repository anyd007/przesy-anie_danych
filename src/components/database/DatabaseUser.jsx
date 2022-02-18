import { Component } from "react";
import React from "react";
import Login from "../logowanie/Login";
import { validInputs } from "../logowanie/testreg";
import "./dbstyle.css";

export class DatabaseUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ustawienie stanu inputów i tablicy w której będą zapisywane dane z inputów
      userForm: [],
      userInputs: {
        playerName: "",
        playerClub: "",
        position: "",
        highScore: "",
      },
      loginData: this.props.getDataFromLogin
    };
  }
  // zapisywanie danych wprowadzonych w inputach
  hanldeInputsValue = (e) => {
    this.setState((prev) => {
      return {
        userInputs: Object.assign(prev.userInputs, {
          [e.target.name]: e.target.value,
        }),
      };
    });
  };
  // przekazywanie daych z inputów do tablicy
  handleSubmit = (e) => {
    this.setState((prev) => ({
      userForm: [...prev.userForm, prev.userInputs],
      userInputs: {
        playerName: "",
        playerClub: "",
        position: "",
        highScore: "",
      },
    }));

    //  czyszczenie pól inputów
    let inputs = document.querySelectorAll("input");
    inputs.forEach((el) => {
      return (el.value = "");
    });
    e.preventDefault();
  };
  // pobieranie danych z komponentu logowania
  handleGetDataFromLogin = () => {
      this.props.getDataFromLogin()
  };
  render() {
    const { userInputs } = this.state;
    //    odblokowanie buttona "dodaj" jeżeli żaden input nie jest pusty
    let checkEmtyInputs = validInputs(
      userInputs.playerName &&
        userInputs.playerClub &&
        userInputs.position &&
        userInputs.highScore
    );
    
    //    przesyłanie danych na beckend
    const sendToBackEnd = () => {
      fetch("http://127.0.0.1:1234/loginUserDatabase", {
        method: "POST",
        body: JSON.stringify(),
        headers: { "Content-Type": "Application/Json" },
      });
    };
    let {loginData} = this.state
    console.log(loginData);
    return (
      <div className="dbMainContener">
        <div className="dbBg"></div>
        <div className="dbHeader">
          DODAJ ZAWODNIKA SWOJEGO DREAM TEAM`U
          <p style={{ fontSize: "20px" }}>WSZYTKIE POLA SĄ OBOWIĄZKOWE</p>
        </div>
        <div className="dbContent">
          <div className="dbForm">
            <div className="dbFormGroup">
              <label htmlFor="playerName">imię i nazwisko zawodnika</label>
              <input
                type="text"
                name="playerName"
                value={this.state.playerName}
                onChange={(e) => this.hanldeInputsValue(e)}
                placeholder="imię i nazwisko..."
              />
            </div>
            <div className="dbFormGroup">
              <label htmlFor="playerClub">obecny/ostatni klub</label>
              <input
                type="text"
                name="playerClub"
                value={this.state.playerClub}
                onChange={this.hanldeInputsValue}
                placeholder="klub..."
              />
            </div>
            <div className="dbFormGroup">
              <label htmlFor="position">pozycja na której gra</label>
              <input
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.hanldeInputsValue}
                placeholder="pozycja..."
              />
            </div>
            <div className="dbFormGroup">
              <label htmlFor="highScore">najwyższa ilośc punktów</label>
              <input
                type="number"
                name="highScore"
                value={this.state.highScore}
                onChange={this.hanldeInputsValue}
                placeholder="punkty..."
              />
            </div>
          </div>
        </div>
        <div className="dbFooter">
          <button
            disabled={checkEmtyInputs}
            type="button"
            onClick={this.handleSubmit}
            className="addPlayerBtn dbBtn"
          >
            dodaj
          </button>
          <button className="dbBtn">zapisz</button>
          <button
            onClick={() => this.props.onExitAdminDB()}
            className="exitPlayerBtn dbBtn"
          >
            zamknij
          </button>
        </div>
        <div className="viewMainDb">
          <div className="dbHeaderView">TWÓJ OSOBISTY DREAM TEAM</div>
          <table className="tableContener">
            <tbody>
              <tr className="databaseTr">
                <th className="databaseTh">IMIĘ I NAZWISKO GRACZA</th>
                <th className="databaseTh">OBECNY/OSTATNI KLUB</th>
                <th className="databaseTh">POZYCJA NA KTÓREJ GRA</th>
                <th className="databaseTh">NAJWYŻSZA ILOŚC PUNKTÓW</th>
              </tr>
              {/* mapowanie po tablicy 'userform' i przekazywanie danych do formularza */}
              {this.state.userForm.map(
                ({ playerName, playerClub, position, highScore }) => (
                  <tr className="databaseTr">
                    <td className="databaseTd">{playerName}</td>
                    <td className="databaseTd">{playerClub}</td>
                    <td className="databaseTd">{position}</td>
                    <td className="databaseTd">{highScore}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
