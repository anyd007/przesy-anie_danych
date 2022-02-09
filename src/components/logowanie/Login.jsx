import React from "react";
import "./style.css"

export class Login extends React.Component {
    constructor(props){
        super(props)
    }
    
render(){
    return <div className="mainContener" ref={this.props.containerRef}>
                    <div className="bg"></div>
                    <div className="header">Stwórz swój dream team NBA</div>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="adminName">trener</label>
                                <input type='text' name="adminName" placeholder="nazwa admina..."/>
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="adminpassword">hasło trenera</label>
                                <input type='text' name="adminpassword" placeholder="hasło admina..."/>
                            </div>
                            <button type="button" className="btn" id="adminBtn">logowanie admina</button>
                            <div className="form-group">
                                <label htmlFor="username">nazwa użytkownika</label>
                                <input type='text' name="username" placeholder="podaj nazwę użytkownika"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">hasło</label>
                                <input type='text' name="username" placeholder="podaj hasło"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button onClick={()=> this.props.odAdminLogin()} type="button" className="btn">zaloguj się</button>
                        <button onClick={() => this.props.onRegestry()} type="button" className="btn">rejestracja</button>
                    </div>
             
                </div>

    }
}
