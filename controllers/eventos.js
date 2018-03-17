module.exports = function (app) {
    var EventosController = {
        menu: function (request, response) {
        var usuario = request.session.usuario, params = { usuario: usuario };
            response.render('eventos/menu', params);
        },

        cadastroUsuarios: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
                response.render('eventos/cadUsuario', params);
        },
        
        cadastroCursos: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
                response.render('eventos/cadCursos', params);
        },
        
        listaCursos: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
                response.render('eventos/listaCursos', params);
        },

        //CADASTRO
       
        novoCurso: function(request, response) {
            var descricao = request.body.curso.descricao;
            var cargahora = request.body.curso.cargahora;
            var categoria = request.body.curso.categoria;
        
            reponse.redirect('/menu')
        }
    };
    return EventosController;
};