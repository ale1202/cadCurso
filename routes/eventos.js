module.exports = function (app) {
    var eventos = app.controllers.eventos;
        app.get('/menu', eventos.menu);

        app.get('/cadUsuario', eventos.cadastroUsuarios);
        app.get('/cadCurso',eventos.cadastroCursos);
        app.get('/listaCurso',eventos.listaCursos);
       
    };