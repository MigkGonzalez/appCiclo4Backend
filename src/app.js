const express   = require('express')
const  morgan = require ('morgan')
const mongoose = require ('mongoose')
const cors = require ('cors')
require('dotenv').config()
const app = express()
const authRoutes = require('./routes/auth.routes')

//configuraciones
app.set('port', process.env.port || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to Mongo'))
.catch(err => console.log(err))

//middlewares
app.use(morgan('dev'))
app.use(cors())

//routes
app.use('/auth', authRoutes)

//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})