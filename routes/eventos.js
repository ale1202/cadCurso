module.exports = function (app) {
    var valida = require("./../middlewares/valida");
    var eventos = app.controllers.eventos;

        app.get('/menu', eventos.menu);
        app.get('/cadCurso',valida, eventos.cadCurso);

        app.get('/cadUsuario',valida, eventos.cadastroUsuarios);
        app.post('/cadastrarUsuario', valida, eventos.cadastrarUsuario);
        app.post('/cadastroCurso',valida, eventos.cadastroCursos);
        app.get('/listaCursos',valida, eventos.listaCursos);
       
    };