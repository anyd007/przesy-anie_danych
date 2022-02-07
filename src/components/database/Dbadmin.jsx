import { render } from "@testing-library/react";
import React from "react";

export class DbAdmin extends React.Component{
    constructor(props){
        super(props)
    }
render(){

    return(
        <div className="dbContener">
            <div className="hearer">gracze NBA</div>
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
                <button className="addPlayerBtn">dodaj</button>
                <button onClick={()=> this.props.onExitAdminDB()} className="exitPlayerBtn">zamknij</button>
            </div>
        </div>
    )

    
}
}
