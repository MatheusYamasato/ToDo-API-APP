const express = require('express');
const app = express();
const bd = require('./infra/sqlite-db.js');
const cors = require('cors');
const tarefaController = require('./controllers/tarefa-controller.js');
const usuarioController = require('./controllers/usuario-controller.js');

app.use(express.json()) ;
app.use(cors());
tarefaController(app, bd);
usuarioController(app, bd);

app.listen(3001, () => {
    console.log("Escutando na porta 3001");
})