export const task = (app) => {
    app.get('/task', (req, res) => {
    res.send('Rota ativada com GET e recurso Tarefa: valores de tarefa devem ser retornados')
    })

    app.post('/task', (req, res) => { 
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")})
}