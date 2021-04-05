// const express = require('express')
// // const app = express()

function usuarioController(app) {
    app.get('/usuario', (req, res) => {
        res.send('Rota ativida com GET e recurso user: valores de user devem ser retornado')
    })

    app.post('/usuario', (req, res) => {
        // res.send(req.body)
        res.send({"olá": req.body.nome})
    })
}

module.exports = usuarioController;