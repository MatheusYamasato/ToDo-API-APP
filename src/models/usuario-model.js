class UsuarioModel {
    constructor(nome, id) {
        this._nome = nome;
        this._id = id;
    }

    get nome() {
        return this._nome; 
    }

    get id() {
        return this._id;
    }
}

module.exports = UsuarioModel;