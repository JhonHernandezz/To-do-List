import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import storageLogin from './View/Login.js'
import storageUser from './View/User.js'

dotenv.config('/')

let appExpress = express()
appExpress.use(express.json())
appExpress.use(cors())

appExpress.use('/login', storageLogin)
appExpress.use('/list', storageUser)

let my_config = JSON.parse(process.env.MY_CONFIG)
appExpress.listen(my_config, () => console.log(`http://${my_config.hostname}:${my_config.port}`))