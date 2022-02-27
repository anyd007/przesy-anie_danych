const express = require("express")
const cors = require("cors")
const path = require('path');
const http = require('http'),
    httpProxy = require('http-proxy');
const app = express()
const publicPath = path.join(__dirname,"..", 'public');


const regystryUsers = []
const loginUserDatabase = []
app.use(cors())
app.use(express.json())
app.use(express.static(publicPath));

const server = httpProxy.createServer(function (req, res, proxy) {
    req.headers.host = 'https://dream-team-database.herokuapp.com/';
    proxy.proxyRequest(req, res, {
      port: 80,
      host: 'https://dream-team-database.herokuapp.com/'
    });
  }).listen(3000);  
//przekazywania danych na stronę sewera
app.get("/",(req,res) =>{
    res.send(req.body)
})

// pobieranie danych z rejestracji i zapisywanie ich do tablicy regystryUsers
app.post("/regestry", (req,res)=>{
    regystryUsers.push(req.body)
    res.status(200).end
})
// pobieranie danych z inputów dream teamu i dodawanie ich do pustej tablict "loginUserDatabase"
app.post("/loginUserDatabase", (req,res)=>{
    loginUserDatabase.push(req.body)
    res.status(200).end
})
// wysłanie danych z rejestracji zapisanych na serwerze z powrotem juz na strone logowania do sprawdzenia poprawnosci logowania usera
app.get("/regestry", (req,res)=>{
    res.json({regystryUsers})
})
   //wysłanie danych do bazy danych zalogowanego uzytkownika
   app.get("/loginUserDatabase",(req,res)=>{
    res.json({loginUserDatabase})
    
})
app.get('/loginUserDatabase', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 app.get('/regestry', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
//tworzenie zmiennej która przekaże dane do heroku, dodatkowo należy dopisać w package.jeson w scripts : "web": "index.js"  
const herokuPort = process.env.PORT || 3000
//nasłuchiwanie app na jakim porcie na działać
app.listen(herokuPort, ()=>{ 
    console.log(`Działam na porcie ${herokuPort}`);
})