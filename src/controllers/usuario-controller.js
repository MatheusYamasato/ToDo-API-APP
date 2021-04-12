const UsuarioModel = require('../models/usuario-model.js')

function usuarioController(app, bd) {
    app.post('/usuario', (req, res) => {
        const body = req.body
        const usuario = new UsuarioModel(body.nome, body.id, body.email)
        bd.usuario.push(usuario)
        res.send(usuario)
    })

    app.get('/usuario', (req, res) => {
        bd.all("SELECT * FROM USUARIOS", (err, rows) => {
            if(err) {
                throw new Error(`Deu ${err}`)
            } else {
                res.send(rows)
            }
        })
    })

    app.get('/usuario/:email', (req, res) => {
        const email = req.params.email;
        const usuarios = bd.usuario;

        usuarios.forEach((usuario) => {
            console.log(usuario);
            if(email === usuario.email) {
                return res.send(usuario)
            } else {
                res.send("E-mail não encontrado")
            }
        })  
    })

    app.delete( '/usuario/:email', (req, res) => {
        const email = req.params.email;
        const usuarios = bd.usuario;
        usuarios.forEach(usuario => {
            if(email === usuario.email) {
                usuarios.splice(usuarios.indexOf(usuario), 1)
                return res.send("Usuario deletado")
            } else {
                res.send("Usuario não encontrado")
            }
        })
    })

    app.put('/usuario/:email', (req, res) => {
        const email = req.params.email;
        const usuarios = bd.usuario;
        usuarios.forEach(usuario => {
            if(email === usuario.email) {
                usuario.email = req.body.email;
                return res.send(usuario)
            } else {
                res.send("Usuario não encontrado")
            }
        })
    })
}

module.exports = usuarioController;