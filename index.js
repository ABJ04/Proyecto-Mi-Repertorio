import cors from 'cors'
import { logger } from 'logger-express'
import 'dotenv/config'
import cancionesRoutes from './routes/canciones.routes.js'
import express from 'express'

const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger())
app.use(cancionesRoutes)
app.use(express.static('public'))

app.listen(PORT, console.log(`Corriendo en  http://localhost:${PORT}`))

app.del('/canciones', (req, res) => {
  const {id} = req.params;
  const canciones = JSON.parse(fs.readFileSync('repertorio.json'));
  const index = canciones.findIndex((c)=> c.id ==id);
  canciones.splice(index, 1);
  fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
  res.status(200).send('¡Cancion eliminada satisfactoriamente!');
})