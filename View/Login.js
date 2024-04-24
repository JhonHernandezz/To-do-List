import { Router } from "express";

import { InstToken } from "../Controller/Login.js";

let storageLogin = Router()

storageLogin.post('/', InstToken.generateToken)

export default storageLogin