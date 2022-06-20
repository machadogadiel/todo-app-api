import { UserModel } from "../model/UserModel.js"

export const user = (app, db) => {
    app.get("/user", (req, res) => {
        // res.send('Rastreamento da aplicação sendo feito com nodemon')
        res.send(db.users)
    })

    app.post("/user", (req, res) => {
        const body = req.body
        const newUser = new UserModel(body.name, body.email, body.password)
        db.users.push(newUser)
        res.send(req.body) 
    })
}
