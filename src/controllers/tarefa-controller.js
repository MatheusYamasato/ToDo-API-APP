// const express = require('express');
// const app = express();

function tarefaController(app) {
    app.post('/tarefas', (req, res) => {
        res.send("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
    })
    app.get('/tarefas', (req, res) => {
        res.send('Rota ativida com GET e recurso tarefa: valores das tarefas devem ser retornados')
    })
}

module.exports = tarefaController


