import { Con } from "./Connect.js"

let db = await Con()

export class InstUser {
    static async getAllList(req, res){

       let { id } = req.data.payload.data[0]

        return new Promise((resolve,reject) => {
            db.query(`select name, list.description as description_list, state.description as description_state, date_start, date_end from list INNER JOIN state ON list.id_state = state.id where id_user = ${id}`, async (err, data) => { 
                    if (err) {
                        return res.send({status: 200, message: 'Error al consultar los datos'})
                    } else {
                        return res.send(data)
                    }
                }
            )
        })
    }

    static async postList(req, res){

        let { id } = req.data.payload.data[0]
        let date_start = new Date()

        let info = {
            id_user: id,
            id_state: req.body.id_state,
            date_start: date_start,
            date_end: req.body.date_end,
            name: req.body.name,
            description: req.body.description
        }
 
        return new Promise((resolve,reject) => {
            db.query(`INSERT INTO list SET ?`, 
            info,
            
            async (err, data) => { 
                    if (err) {
                        return res.send({status: 200, message: 'Error al agregar la tarea'})
                    } else { 
                        return res.send({status: 200, message: 'Tarea agregada con exito'})
                    }
                }
            )
        })
    }

    static async postList(req, res){

        let { id } = req.data.payload.data[0]
        let date_start = new Date()

        let info = {
            id_user: id,
            id_state: req.body.id_state,
            date_start: date_start,
            date_end: req.body.date_end,
            name: req.body.name,
            description: req.body.description
        }
 
        return new Promise((resolve,reject) => {
            db.query(`INSERT INTO list SET ?`, 
            info,
            
            async (err, data) => { 
                    if (err) {
                        return res.send({status: 200, message: 'Error al agregar la tarea'})
                    } else { 
                        return res.send({status: 200, message: 'Tarea agregada con exito'})
                    }
                }
            )
        })
    }

    static async putList(req, res){

        let id = parseInt(req.params.id)

        let info = {
            id_state: req.body.id_state,
            date_end: req.body.date_end,
            name: req.body.name,
            description: req.body.description
        }
 
        return new Promise((resolve,reject) => {
            db.query(`UPDATE list SET ? WHERE id = ${id}`, 
            [info, id],
            
            async (err, data) => { 
                    if (err) {
                        return res.send({status: 200, message: 'Error al actualizar la tarea'})
                    } else { 
                        return res.send({status: 200, message: 'Tarea actualizada con exito'})
                    }
                }
            )
        })
    }

    static async deleteList(req, res){

        let id = parseInt(req.params.id)
 
        return new Promise((resolve,reject) => {

            db.query(`DELETE FROM list WHERE id = ${id}`, 
            id,
            
            async (err, data) => { 
                    if (err) {
                        return res.send({status: 200, message: 'Error al eliminar la tarea'})
                    } else { 
                        return res.send({status: 200, message: 'Tarea eliminada con exito'})
                    }
                }
            )
        })
    }
}