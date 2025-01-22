
import express from 'express'
import usuariosRoutes from './routes/usuariosRoutes.js'
const app = express()

const port = 3000;

app.use('/' , usuariosRoutes)

//Iniciar puerto
app.listen(port, () =>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
    
});