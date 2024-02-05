<?php
/* header('Access-Control-Allow-Origin: http://cyborgconsulting.local');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Allow: POST"); */

include '../latte/releases/fragment/support/actions/fragment_init.php';

if (!isset($_POST['host'])) {
    die('Invalid url.');
}

// Retrieve post data.
$post = $_POST;

// Retrieve cv file if exist.
$file = !empty($_FILES['cv']) ? $_FILES['cv'] : false;

try {
    $keys = array(
        "nombre"    => "name",
        "email"     => "email",
        "telefono"  => "phone",
        "mensaje"   => "message",
        "empresa"   => "empresa",
        "intereses" => "interest",
        "cv"        => "cv",
        "pais"      => "country",
        "url"       => "url"
    );

    $lead = new Lead();

    foreach ($post as $key => $value) {
        if ($key === 'host' || $key === 'terminos-y-condiciones') {
            continue;
        }
        $lead->{$keys[$key]} = $value;
    }

    $lead->save();
    echo true;
} catch (Error $err) {
    echo false;
}
