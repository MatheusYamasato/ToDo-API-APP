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
                if(err) rej('Falha ao inserir usuário')
                else res('Usuário inserido com sucesso')
            })
        })
    }

    alterarUsuario(usuario) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE USUARIOS SET (NOME, EMAIL, SENHA) = (?, ?, ?) WHERE (NOME, EMAIL SENHA) = (?, ?, ?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => {
                if(err) rej('Falha ao alterar o usuário')
                else res('Usuário alterado com sucesso')
            })
        })
    }

    deletarUsuario(usuario) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM USUARIOS WHERE (NOME) = (?)'
            , [usuario.nome]
            , (err) => {
                if(err) rej('Falha ao deletar o usuário')
                else res('Usuário deletado com sucesso')
            })
        })
    }
}