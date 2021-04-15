module.exports = class UsuariosDAO {

    constructor(bd) {
        this.bd = bd;
    }

    listarUsuarios() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM USUARIOS',
            (err, usuarios) => {
                if(err) {
                    rej(err)
                } else {
                    res(usuarios)
                }
            })

        } 
    )}

    insereUsuario(usuario) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => {
                if(err) {
                    rej('Falha ao inserir usuário')
                } else {
                    res('Usuário inserido com sucesso')
                }
            })
        })
    }
}