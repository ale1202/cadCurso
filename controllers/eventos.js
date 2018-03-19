module.exports = function (app) {
    var cursos = app.models.cursos;
    var usuarios = app.models.usuarios;

    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
            response.render('eventos/menu', params);
        },

        cadCurso: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
            response.render('eventos/cadCursos', params);
        },

        cadastroUsuarios: function (request, response) {
            var usuario = request.session.usuario, params = { usuario: usuario };
            response.render('eventos/cadUsuarios', params);
        },

        cadastrarUsuario: function (request, response){
            var usuario= request.body.usuario;
            usuarios.create(usuario, function(erro, usuario){
                if(erro) { 
                     response.redirect("/");
                }  else {
                   response.redirect("/cadUsuario");
                }
            });    
        },

        cadastroCursos: function (request, response) {
           var curso= request.body.curso;
           cursos.create(curso, function(erro, curso){
                if(erro) { 
                    response.redirect("/");
                 } else {
                  response.redirect("/listaCursos");
                }
           });
        },


        listaCursos: function (request, response) {
            cursos.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                } else {
                   var lista={cursos:cursos};
                    response.render('eventos/listaCursos',lista);
                }
            });
        },
    
        logout: function(request,resposen) {
            request.session.destroy();
            response.redirect('/');
        }
     
};
return EventosController;
};