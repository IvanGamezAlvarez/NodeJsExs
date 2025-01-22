
import express from 'express'
import usuariosRoutes from './routes/usuariosRoutes.js'
const app = express()

app.set('view engine' , 'pug')
app.set('views', './views')

app.use('/auth' , usuariosRoutes)





//Iniciar puerto
const port = 3000;
app.listen(port, () =>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
    
});