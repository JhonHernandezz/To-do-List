import  mysql  from 'mysql2'
import dotenv from 'dotenv'

dotenv.config('/')

export async function Con() {  
    try {
        let conexion = undefined
        let connect = JSON.parse(process.env.MY_CONNECT)
        conexion = await mysql.createPool(connect)
        return conexion

    } catch (error) {
        console.log(error);  
    }
} 