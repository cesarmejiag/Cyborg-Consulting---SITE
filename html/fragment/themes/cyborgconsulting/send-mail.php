<?php
if (!isset($_POST['host'])) { die('Invalid url.'); }

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'php-mailer/src/Exception.php';
require 'php-mailer/src/PHPMailer.php';
require 'php-mailer/src/SMTP.php';

// Retrieve post data.
$post = $_POST;
// $post = array('nombre' => 'César', 'email' => 'cesar@email.com'); // Prueba
$file = !empty($_FILES['cv']) ? $_FILES['cv'] : false;

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(false);

try {
    //Server settings
    $mail->SMTPDebug   = SMTP::DEBUG_OFF;                       //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host        = 'mail.wozit.com.mx';                   //Set the SMTP server to send through
    $mail->SMTPAuth    = true;                                  //Enable SMTP authentication
    $mail->SMTPAutoTLS = false;
    $mail->Username    = 'prueba@wozit.com.mx';                 //SMTP username
    $mail->Password    = 'W0z1T1234!';                          //SMTP password
    $mail->SMTPSecure  = PHPMailer::ENCRYPTION_STARTTLS;        //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    // $mail->SMTPSecure  = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port        = 26;                                   //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above (default: 587)

    //Recipients
    $mail->setFrom('info@cyborgconsulting.com.mx', 'CyborgConsulting');
    $mail->addAddress('alvaro.algara@cyborgconsulting.com.mx');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    $mail->addBCC('iconfidence@gmail.com');
    // $mail->addBCC('alvaro.algara@gmail.com');
    // $mail->addBCC('jessica.blanco@cyborgconsulting.com.mx');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
    if ($file) {
        $mail->addAttachment($file['tmp_name'], $file['name']);
    }

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Mensaje de cyborgconsulting.com.mx';

    $message = "";

    // Extract each data from form to create the mail message.
    foreach ($post as $key => $value) {
        if ($key === 'host') {
            continue;
        }
        $message .= "$key: $value<br />";
    }
    $mail->Body    = $message;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    echo $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
