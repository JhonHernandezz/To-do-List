import { SignJWT, jwtVerify } from "jose";

import { Con } from "./Connect.js"

let db = await Con()

export class InstToken {
    static async generateToken(req, res, next){

        let username = req.body.username
        let password = req.body.password

        return new Promise((resolve,reject) => {
            db.query(`select * from user where username = "${username}" && password = "${password}" `, async(err, data) => { 
                         
                console.log(data.length);

                if (data.length == 0) {
                    
                    return res.send({status: 200, message: 'Error en el usuario o la contraseña'});
                   
                } else {
                    const encoder = new TextEncoder();
                    const jwtconstructor = new SignJWT({data}); 
                    const jwt = await jwtconstructor
                    .setProtectedHeader({alg: "HS256", typ: "JWT"})
                    .setIssuedAt()
                    .setExpirationTime("10h")
                    .sign(encoder.encode(process.env.MY_JWT));
                
                    next();
                    return res.send(jwt)
                }
            })
        })
    }

    static async validarToken(req, res, next) {
        const {authorization} = req.headers;
        if(!authorization) return res.status(401).send({token: "Error en el token."});
        try {

            const encoder = new TextEncoder();
            const jwtData = await jwtVerify(authorization, encoder.encode(process.env.MY_JWT))
            
            req.data = jwtData
            
            next();

        } catch (error) {
            res.status(400).send({token: "Este token no existe, por favor genere uno nuevo."})
        }
    }
}