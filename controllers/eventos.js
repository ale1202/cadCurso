module.exports = function (app) {
    var Evento = app.models.eventos;

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
            Cursos.find(function (erro, eventos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('eventos/listaCursos', params);
                }
            });
        },
    
        logout: function(request,resposen) {
            request.session.destroy();
            response.redirect('/');
        },

        //CADASTRO

        novoCurso: function (request, response) {
            var descricao = request.body.curso.descricao;
            var cargahora = request.body.curso.cargahora;
            var categoria = request.body.curso.categoria;

            if(descricao.trim().length == 0 || cargahora == 'undefined'
                || categoria.trim().length == 0) {
                response.redirect('/cadCursos');
            }
            else {
                var curso = request.body.curso;
                Curso.create(curso, function (erro, curso) {
                    if (erro) {
                        response.redirect('/cadCursos');
                    } else {
                        response.redirect('/menu');
                    }
                });
            }
        }
};
return EventosController;
};