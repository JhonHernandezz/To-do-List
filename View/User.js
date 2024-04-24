import { Router } from "express";

import { InstUser } from "../Controller/User.js"; 
import { InstToken } from "../Controller/Login.js";

let storageUser = Router()

storageUser.get('/', InstToken.validarToken, InstUser.getAllList)
storageUser.post('/', InstToken.validarToken, InstUser.postList)
storageUser.put('/:id', InstToken.validarToken, InstUser.putList)
storageUser.delete('/:id', InstToken.validarToken, InstUser.deleteList)

export default storageUser