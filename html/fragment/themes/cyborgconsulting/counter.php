<?php
// Used for expresiontotaltv.com
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET");
header("Allow: GET");

$file = "./count.txt";

if (file_exists($file)) {
    $data = file_get_contents($file, true);
    $count = intval($data);
    file_put_contents($file, strval($count + 1));
    echo json_encode(array("success" => true, "data" => array("count" => $count)));
} else {
    echo json_encode(array("success" => false, "message" => "File doesn't exist"));
}
