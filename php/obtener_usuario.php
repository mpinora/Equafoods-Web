<?php
include 'conexion.php';

if (isset($_GET['id'])) {
    $user_id = $_GET['id'];
    
    $sql = "SELECT nombre, correo FROM usuarios WHERE id = $user_id";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $usuario = array('nombre' => $row['nombre'], 'email' => $row['correo']);
        echo json_encode($usuario);
    } else {
        echo "Usuario no encontrado";
    }
} else {
    echo "ID de usuario no especificado";
}
