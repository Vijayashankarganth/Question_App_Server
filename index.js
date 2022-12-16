const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors())

const port = 3210

require('dotenv').config()

const ConfigueDb=require('./config/database')
ConfigueDb()

const router=require('./config/routes')
app.use(router)
 
app.listen(port,()=>{
    console.log('server connected to',port)
})