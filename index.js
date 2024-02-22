const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
app.use(express.json())
app.listen(3000, console.log('¡Servidor encendido!'))
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')) })

const archivo = 'repertorio.json'

if (!fs.existsSync(archivo)) {
  fs.writeFileSync(archivo, '[]')
  console.log('El archivo repertorio.json ha sido creado.')
} else {
  console.log('El archivo repertorio.json ya existe.')
}

app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('repertorio.json'))
  res.json(canciones)
})
