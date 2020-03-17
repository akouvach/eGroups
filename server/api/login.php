<?php

include_once '../core/jwt_core.php';

require '../vendor/autoload.php';
require_once "../controller/usuario_controller.php";

use Firebase\JWT\JWT;

// required headers
header("Access-Control-Allow-Origin: http://localhost/egroups/api/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// database connection will be here

$json = file_get_contents('php://input');
$data = json_decode($json);

$usr = new UsuarioController();

$result = $usr->getCredentials($data->email, $data->password);

if (!is_null($result)){
    $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "data" => array(
            "id" => $result[0]->id,
            "nombre" => $result[0]->nombre,
            "apellido" => $result[0]->apellido,
            "email" => $result[0]->email
        )
     );

    // set response code
    http_response_code(200);
    // generate jwt
    $jwt = JWT::encode($token, $key);

    echo json_encode(
         array(
             "ok" => true,
             "jwt" => $jwt
         )
     );

} else {
     // set response code
    http_response_code(400);
    // generate jwt
 
    echo json_encode(
         array(
             "ok" => false,
             "mensaje" => $result
         )
     );

}



?>
