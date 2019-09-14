<?php
    $destino = "gguerrerom@vera.com.uy";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $celular = $_POST["celular"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "\nE-Mail: " . $email . "\nCelular: " . $celular . "\nMensaje: " . $mensaje ;
    mail($destino,"Contacto", $contenido);
    header("location:gracias.html");
    
?>