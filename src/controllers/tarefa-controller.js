const TarefaModel = require('../models/tarefa-model.js');

function tarefaController(app, bd) {
    app.post('/tarefas', (req, res) => {
        const body = req.body;
        const tarefa = new TarefaModel(body.data, body.nome, body.prioridade, body.status);
        bd.tarefas.push(tarefa)
        res.send(tarefa)
    })

    app.get('/tarefas', (req, res) => {
        bd.all("SELECT * FROM TAREFAS", (err, rows) => {
            if(err) {
                throw new Error(`Deu ${err}`)
            } else {
                res.send(rows)
            }
        })
    })

    app.get('/tarefas/:nome', (req, res) => {
        const nome = req.params.nome;
        const tarefas = bd.tarefas;

        tarefas.forEach((tarefa) => {
            console.log(tarefa);
            if(nome === tarefa.nome) {
                return res.send(tarefa)
            } else {
                res.send("E-mail não encontrado")
            }
        })  
    })

    app.delete('/tarefas/:nome', (req, res) => {
        const nome = req.params.nome;
        const array = bd.tarefas;
        array.forEach(elemento => {
            if(nome === elemento.nome) {
                array.splice(array.indexOf(elemento), 1)
                res.send("Usuario deletado")
            } else {
                res.send("Usuario não encontrado")
            }
        })
    })

    app.put('/tarefas/:nome', (req, res) => {
        const nome = req.params.nome
        const array = bd.tarefas;
        array.forEach(tarefa => {
            if(nome === tarefa.nome) {
                tarefa.nome = req.body.nome;
                return res.send(tarefa)
            } else {
                res.send("Usuario não encontrado")
            }
        })
    })
}

module.exports = tarefaController;