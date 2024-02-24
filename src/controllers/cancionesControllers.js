import fs from 'fs'

const getCanciones = (req, res) => {
  try {
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
    res.status(200).json(canciones)
  } catch (error) {
    res.status(500).json({ message: 'No se Agrego Cancion' })
  }
}
const postCanciones = (req, res) => {
  try {
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
    canciones.push(cancion)
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones))
    res.status(201).json({ message: 'Canción agregada correctamente' })
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la canción' })
  }
}

const deleteCanciones = (req, res) => {
  try {
    const {id} = req.params
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
    const index = canciones.findIndex((c)=> c.id ==parseInt(id));
    canciones[index]=cancion;
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones))
    res.status(202).json({ message: 'Canción editada satisfactoriamente' })
  } catch (error) {
    res.status(500).json({ message: 'Error al intentar editar la canción' })
  }
}


export { getCanciones, postCanciones, deleteCanciones}
