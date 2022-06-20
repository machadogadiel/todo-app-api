import { TaskModel } from "../model/TaskModel.js"

export const task = (app, db) => {
    app.get("/task", (req, res) => {
        // res.send('Rota ativada com GET e recurso Tarefa: valores de tarefa devem ser retornados')
        res.send(db.tasks)
    })

    app.post("/task", (req, res) => { 
        const body = req.body
        const newUser = new TaskModel(body.title, body.description, body.status, body.date)
        db.tasks.push(newUser)
        res.send(req.body) 
    })
}