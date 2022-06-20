import chalk from 'chalk';
import express from 'express';
import { db } from './infra/bd.js';
import { task } from './controller/TaskController.js';
import { user } from './controller/UserController.js';

const app = express()
const port = 3000
const address = `http://localhost:${port}`
    
app.use(express.json())

task(app, db)
user(app, db)

app.listen(port, () => {
    const msg = `Listening to ${port}
    Task | ${address}/task
    User | ${address}/user`
    
    console.log(chalk.cyan(msg))
})