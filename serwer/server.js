const express = require("express")
const cors = require("cors")
const path = require('path');
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');

const regystryUsers = []
const loginUserDatabase = []


app.use(cors())
app.use(express.json())
app.use("/loginUserDatabase", createProxyMiddleware({target: "https://dream-team-database.herokuapp.com", changeOrigin: true  }))
app.use("/regestry", createProxyMiddleware({target: "https://dream-team-database.herokuapp.com", changeOrigin: true  }))

// przekazywania danych na stronę sewera
// app.get("/",(req,res) =>{
//     res.send(req.body)
// })

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

//tworzenie zmiennej która przekaże dane do heroku, dodatkowo należy dopisać w package.jeson w scripts : "web": "index.js"  
const herokuPort = process.env.PORT || 5000
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));
  // Handle React routing, return all requests to React app
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

//nasłuchiwanie app na jakim porcie na działać
app.listen(herokuPort, ()=>{ 
    console.log(`Działam na porcie ${herokuPort}`);
})

