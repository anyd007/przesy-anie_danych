import React from "react";


export class Regester extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
         return <div className="mainContener" ref={this.props.containerRef}>
            <div className="bg"></div>
                    <div className="header">Rejestracja</div>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">nazwa użytkownika</label>
                                <input type='text' name="username" placeholder="podaj nazwę użytkownika..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mail">podaj e-mail</label>
                                <input type='email' name="mail" placeholder="podaj e-mail..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">hasło</label>
                                <input type='text' name="username" placeholder="podaj hasło..."/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button onClick={() => this.props.onHideRegestry()} type="button" className="btn">Rejestracja</button>
                    </div>
                </div>

    }
}