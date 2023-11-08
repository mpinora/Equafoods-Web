<?php 
// Configuración de la conexión a la base de datos (reemplaza con tus propios datos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios";

// Conexión a la base de datos
$conexion = mysqli_connect($servername, $username, $password, $dbname);

if(mysqli_connect_errno()){
    echo "Error de conexion". mysqli_connect_errno();
}

$URL = "http://localhost/Equafoods";
