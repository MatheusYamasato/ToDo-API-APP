module.exports = class TarefasDAO {

    constructor(bd) {
        this.bd = bd;
    }

    listarTarefas() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM TAREFAS',
            (err, tarefas) => {
                if(err) {
                    rej(err)
                } else {
                    res(tarefas)
                }
            })

        } 
    )}

    insereTarefa(tarefa) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO) VALUES (?,?,?,?)'
            , [tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.datacriacao]
            , (err) => {
                if(err) {
                    rej('Falha ao inserir tarefa')
                } else {
                    res('Tarefa inserida com sucesso')
                }
            })
        })
    }
}