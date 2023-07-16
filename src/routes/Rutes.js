

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


//POST
router.post('/canchas', (req,res)=>{
  const cancha = req.body
  canchas.push(cancha)
  res.status(201).json("Cancha creada")
})


//PUT   
router.put('/canchas/:id', (req,res)=>{ 
  const id = parseInt(req.params.id) 
  const cancha = canchas.find((cancha)=> cancha.id == id) //busca la cancha
  if (cancha){
    cancha.nombre = req.body.nombre
    cancha.capacidad = req.body.capacidad
    cancha.direccion = req.body.direccion
    res.status(200).json("Cancha modificada")
    res.json(cancha)
  } else {
    res.status(404).json({error: "Cancha no encontrada"})
  }

})

//DELETE
router.delete('/canchas/:id', (req,res)=>{
  const id = parseInt(req.params.id)
  const index = canchas.findIndex((cancha)=>cancha.id == id)
  if(index != -1){
    canchas.splice(index, 1)
    res.status(200).json("cancha eliminada")
  } else {
    res.status(404).json("Cancha no encontrada")
  }
})

module.exports = router