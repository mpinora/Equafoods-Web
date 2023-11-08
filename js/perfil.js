$(document).ready(function () {
    var userId = 1; // Cambia este valor según el usuario que deseas mostrar
    $.get("php/obtener_usuario.php?user_id=" + userId, function (data) {
        var usuario = JSON.parse(data);
        $("#nombre").html("<strong>Nombre:</strong> " + usuario.nombre);
        $("#email").html("<strong>Email:</strong> " + usuario.email);
    });
});
