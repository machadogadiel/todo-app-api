import express from 'express';

const app = express();

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso Tarefa: valores de tarefa devem ser retornados')
})

app.listen(3000, () => console.log('funciona'))