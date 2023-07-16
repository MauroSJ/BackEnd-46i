

//1-Invocamos express
const express = require('express')
//2-Invocamos a routes desde express
const router = express.Router()

//3-Exportando rutas
const equipos = require('../equipos')
const canchas = require('../canchas')

//GET
router.get('/equipos', (req,res)=>{
  res.send(equipos)
})
router.get('/canchas', (req,res)=>{
  res.json(canchas)
})
router.get('/canchas/:id', (req,res)=>{
  const id = req.params.id
  const cancha = canchas.find((cancha)=> cancha.id == id)
  if(cancha){
    res.json(cancha)
  } else{
    res.status(404).json({error: "Cancha no encontrada"})
  }
})


//


module.exports = router