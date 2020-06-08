<?php
$nombre= $_POST["nombre"];
$telefono= $_POST["telefono"];
$email= $_POST["email"];
$mensaje= $_POST["mensaje"];
$asunto= $_POST["asunto"];

$body = "Nombre: " . $nombre . "<br>Asunto: " .$asunto. "<br>telefono: " .$telefono. "<br>Email: " .$email. "<br>Mensaje: " .$mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'danlevitmorales@gmail.com';                     // SMTP username
    $mail->Password   = 'villa3019';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('danlevitmorales@gmail.com', $nombre);
    $mail->addAddress('danlevitmorales@gmail.com');     // Add a recipient
   
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $asunto;
    $mail->Body    = $body;
   

    $mail->send();
    echo '
     <script>
        alert("Correo enviado con exito");
        window.history.go(-1);
     </script>
    ';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
