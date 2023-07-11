import express from 'express'
import 'dotenv/config' //libreria que nos sirve para poder tomar nuestro .env
import cors from 'cors'  //permite recibir peticiones remotas
import morgan from 'morgan' //brinda detalles en nuestra terminal (estado, tipos de request, saber quien se conecta a nuestro backend)

console.log('Hello World Back END 46i')

//1-Creamos instacia de express (inicializamos express)
const app = express()

//2-Configuramos el puerto en el que se ejecutara nuestro back end
app.set('port', process.env.PORT || 5050)

//3-Inicalizamos nuedtro Back END

app.listen(app.get('port'), ()=>{
  console.log(`BackEnd46i listening to port ${app.get('port')}`);
}).on('error', (error)=>{
   console.log('ERROR:', error);
   process.exit(1);
});

//4- Instalamos dotenv : para poder utilizar nuestro .env

//5-Instalamos y configuramos nodemon : para que cada vez que realicemos un cambio en nuestro back end, se actualice nuestro cambio.
//Creamos un script dev : nodemon --exec babel-node src/index.js


//6-MIDDLEWARES:configuraciones extras del backend antes de que se ejecuten las rutas (endpoints: por donde accederan al backend los del frontend)

//1-middle nativos de express
app.use(express.json()) //permite recibir objetos en formato json
app.use(express.urlencoded({extended:true})) //permite recibir parametros y queris en las rutas

//2-middle de tercerosnp
app.use(morgan('dev')) //brinda detalles en nuestra terminal (estado, tipos de request, saber quien se conecta a nuestro backend)
app.use(cors('')) //permite recibir peticiones remotas



//Primer endpoint o punto para ruta
//REQUEST (de express): es la consulta.RESPONSE (todo lo que le mando al front como respuesta).
app.get('/test', (req, res)=>{ 
  // console.log('Objeto req:', req)
  console.log('Entro en get test')
  // res.send('Aqui va la respuesta')
  res.status(200).json({message:'Aqui iria mi respuesta'})
})
