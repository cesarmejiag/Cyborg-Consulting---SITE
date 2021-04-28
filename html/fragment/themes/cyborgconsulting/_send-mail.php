<?php
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Allow: POST");

if (!isset($_POST['Email'])) { die('Invalid url.'); }

// Retrieve data from $_POST variable.
$post_data = $_POST;


// Configure mail.
$to      = "iconfidence@gmail.com";
$subject = "Mensaje de Jimena Amador";
$message = "";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// $headers .= 'From: Jimena Amador' . "\r\n";
// $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
// $headers .= 'Bcc: iconfidence@gmail.com' . "\r\n";


// Extract each data from form to create the mail message.
foreach ($post_data as $key => $value) {
    $message .= "$key: $value<br />";
}


// Send mail and return if the sending was successfully.
$sent = mail($to, $subject, $message, $headers);
echo json_encode(array('success' => $sent));
