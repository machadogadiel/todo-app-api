import express from 'express';
import { task } from './controller/TaskController.js';
import { user } from './controller/UserController.js';

const app = express();

task(app)
user(app)

app.listen(3000)