require('dotenv').config()
const express = require('express')
require('./DB/connection')
const cors = require('cors')
const routes = require('./Router/router')
const dummyServer = express()
dummyServer.use(cors())
dummyServer.use(express.json())
dummyServer.use(routes)
const PORT = 4005

dummyServer.listen(PORT,()=>{
    console.log(`Server is runnning in PORT ${PORT}`);
    
})
