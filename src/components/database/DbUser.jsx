import { render } from "@testing-library/react";
import React from "react";

export class DbAdmin extends React.Component{
    constructor(props){
        super(props)
    }
render(){

    return(
        <div className="dbMainContener">
            <div className="dbBg"></div>
            <div className="dbHeader">DODAJ ZAWODNIKA SWOJEGO DREAM TEAM`U</div>
            <div className="dbContent">
                <div className="dbForm">
                    <div className="dbFormGroup">
                        <label htmlFor="playerName">imię i nazwisko zawodnika</label>
                        <input type='text' name="playerName" placeholder="imię i nazwisko..."/>
                    </div>
                    <div className="dbFormGroup">
                        <label htmlFor="playerClub">obecny/ostatni klub</label>
                        <input type='text' name="playerClub" placeholder="klub..."/>
                    </div>
                    <div className="dbFormGroup">
                        <label htmlFor="playerPosition">pozycja na której gra</label>
                        <input type='text' name="playerPosition" placeholder="pozycja..."/>
                    </div>
                    <div className="dbFormGroup">
                        <label htmlFor="playerScore">najwyższa ilośc punktów</label>
                        <input type='text' name="playerScore" placeholder="punkty..."/>
                    </div>
                </div>
            </div>
            <div className="dbFooter">
                <button className="addPlayerBtn dbBtn">dodaj</button>
                <button onClick={()=> this.props.onExitAdminDB()} className="exitPlayerBtn dbBtn">zamknij</button>
            </div>
            <div className="viewMainDb">
                <div className="dbHeaderView">TWÓJ OSOBISTY DREAM TEAM</div>
                    <table className="tableContener">
                        <tbody>
                            <tr className="databaseTr">
                                <th className="databaseTh">IMIĘ I NAZWISKO GRACZA</th><th className="databaseTh">OBECNY/OSTATNI KLUB</th><th className="databaseTh">POZYCJA NA KTÓREJ GRA</th><th className="databaseTh">NAJWYŻSZA ILOŚC PUNKTÓW</th>
                            </tr>
                            <tr className="databaseTr">
                                <td className="databaseTd">ldskfdslkf</td><td className="databaseTd">kjkljlkjlkjl</td><td className="databaseTd">kljlkjlkjkll</td><td className="databaseTd">kjkjjlkjlklkj</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )

    
}
}
