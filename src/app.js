const express = require('express');
const app = express();

const tarefaController = require('./controllers/tarefa-controller.js');
const usuarioController = require('./controllers/usuario-controller.js');

app.use(express.json()) ;
tarefaController(app);
usuarioController(app);

app.listen(3001, () => {
    console.log("Escutando na porta 3001");
})