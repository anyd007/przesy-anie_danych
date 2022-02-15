const { request } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const server = {
    port: 1234
}
const regystryUsers = []
app.use(cors())
app.use(express.json())

// wysyłanie info na strone servera
app.get('/',(req, res)=>{
    res.send(req.body)
})
// pobieranie danych z rejestracji i zapisywanie ich do tablicy regystryUsers
app.post('/regestry', (req,res) =>{
    regystryUsers.push(req.body)
    res.status(200).end
})
// wysłanie danych zapisanych na serwerze z powrotem juz na strone logowania do sprawdzenia poprawnosci logowania usera
app.get('/regestry', (req, res) =>{
    res.json({regystryUsers})
})



app.listen(server.port, ()=>{
    console.log(`działm na porcie ${server.port}`);
})