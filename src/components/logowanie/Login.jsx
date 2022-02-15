import React, { useEffect } from "react";
import "./style.css"

const Login = (props)=>{
    const [state, setState]= React.useState({username:"", password:"", id:""})
    const [backEndReg, setBackEndReg] = React.useState('')
        
    //    pobieranie wartości pól logowania
        const loginValues = e =>{
            const {name, value} = e.target
           return setState(prev =>({
                ...prev,
                [name]: value
            }))
        }
        // na onclick przypistwanie danych z pól logowania i sprawdzanie poprawności z danymi z rejestracji
                let loginInput = document.querySelectorAll('.loginInput')
                let warrningPopup = document.querySelector('.badLoginWarrinig')
                let backgroundblur = document.querySelector('.backgroundblur')
        const loginBtn = () =>{
            setState(prev =>({
                ...prev,
                username:"",
                password:"",
                id:""
            }))
           let user = state.username
           let pass = state.password
          backEndReg.forEach(el =>{
              if(el.username == user && el.password == pass){
                  state.id= el.id
                 return props.odAdminLogin()
              }else{
                warrningPopup.style.display = 'flex'
                backgroundblur.style.display = 'flex'
                loginInput.forEach(el =>{
                    el.classList.add('bad')
                    el.onclick = () =>{
                        el.classList.remove('bad')
                    }
                })
              }
          })
        }
        // zamykanie popup z info o błędnym logowaniu
        const WarrningExit = () =>{
           warrningPopup.style.display = 'none'
           backgroundblur.style.display = 'none'
        }
    

//    pobieranie daych z express, dane podawane w rejestracji
    React.useEffect(()=>{
        fetch('http://127.0.0.1:1234/regestry')
        .then(res => res.json())
        .then(data => setBackEndReg(data.regystryUsers.map(el =>{
            return(
            {username:el.username,
            password:el.password,
            id:el.id}
            )
        })))
    }, [])


return( <div className="mainContener">
                    <div className="bg"></div>
                    <div className="backgroundblur"></div>
                                 <div className="badLoginWarrinig">
                                    <div className="warrinigInfo">
                                        <h2>DANE LOGOWANIA NIE ZGADZAJĄ SIĘ, SPRAWDŹ I SPRÓBUJ PONOWNIE...</h2>
                                    </div>
                                    <div className="warrningBtn">
                                    <button onClick={()=> WarrningExit()} type="button" className="btn">WRÓC DO LOGOWANIA</button>
                                    </div>
                                </div>
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
                                <input className="loginInput"
                                 type='text' 
                                name="username" 
                                value={state.username}
                                onChange={loginValues}
                                placeholder="podaj nazwę użytkownika"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">hasło</label>
                                <input className="loginInput"
                                type='text' 
                                name="password" 
                                value={state.password}
                                onChange={loginValues}
                                placeholder="podaj hasło"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button onClick={()=>loginBtn()} type="button" className="btn">zaloguj się</button>
                        <button onClick={() =>props.onRegestry()} type="button" className="btn">rejestracja</button>
                    </div>
             
                </div>

    )
}
export default Login;
