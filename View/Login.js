import { Router } from "express";

import { InstToken } from "../Controller/Login.js";

let storageLogin = Router()

storageLogin.get('/', InstToken.generateToken)

export default storageLogin