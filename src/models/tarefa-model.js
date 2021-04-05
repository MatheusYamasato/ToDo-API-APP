class TarefaModel {
    constructor(data, nome, prioridade, status) {
        this._data = data;
        this._nome = nome;
        this._prioridade = prioridade;
        this._status = status;
    }

    get data() {
        return this._data; 
    }

    get nome() {
        return this._nome; 
    }

    get prioridade() {
        return this._prioridade; 
    }
}

module.exports = TarefaModel;