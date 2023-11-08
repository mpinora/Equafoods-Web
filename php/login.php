<?php
include 'conexion.php';

$email = $_POST['username'];
$password = $_POST['password'];

$contador = 0;
$usuarios = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo = '$email'");

foreach ($usuarios as $usuario){
    $contador = $contador + 1;
    $email_bd = $usuario['correo'];
    $password_bd = $usuario['contrasena'];

}

if($contador > 0){
    session_start();

    $_SESSION['sesion_email'] = "$email";
    header("location: http://localhost/Equafoods/perfil.html");
    
}else{
    echo "DATOS INCORRECTOS";
}
