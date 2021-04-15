const UsuarioModel = require('../models/usuario-model.js')
const UsuarioDAO = require('../DAO/usuarios-dao')

function usuarioController(app, bd) {
    
    const DAO = new UsuarioDAO(bd)
    app.get('/usuario', (req, res) => {
        DAO.listarUsuarios()
            .then((usuarios) => res.send(usuarios))
            .catch((err) => res.send(`Erro: ${err} na consulta`))
    })

    app.post('/usuario', (req, res) => {
        const body = req.body
        const usuario = new UsuarioModel(0, body.nome, body.email, body.senha)
        DAO.insereUsuario(usuario)
            .then((usuario) => res.send(usuario))
            .catch((err) => res.send(`${err}`))
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