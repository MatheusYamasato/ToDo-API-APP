class TarefaModel {
    constructor(id, titulo, descricao, status, datacriacao, email) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.datacriacao = datacriacao;
        this.email = email;
    }
}

module.exports = TarefaModel;