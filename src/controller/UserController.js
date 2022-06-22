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

    app.get("/user/:email", (req, res) => {
        const param = req.params.email
        const users = db.users

        res.send(users.filter(el => el.email == param))
    })

    app.delete("/user/:email", (req, res) => {
        const param = req.params.email
        const users = db.users
        const email = users.filter(el => el.email == param)

        const sucessMsg = {
            "message": `${param} deleted`
        }

        const failMsg = {
            "message": `${param} not found`
        }

        users.splice(users.indexOf(email), 1)

        res.send(email !== [] ? sucessMsg : failMsg)
    })
}
