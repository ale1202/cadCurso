module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    
    var curso = Schema({
        Codigo:    { type: String },
        descricao: { type: String },
        cargahora: { type: String },
        categoria: { type: String }
    });

    return mongoose.model('cursos', curso);
};