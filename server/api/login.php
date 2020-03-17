<?php

include_once '../core/jwt_core.php';
require '../vendor/autoload.php';

use Firebase\JWT\JWT;

// required headers
header("Access-Control-Allow-Origin: http://localhost/egroups/api/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// database connection will be here

// include_once 'config/core.php';
// include_once 'libs/php-jwt-master/src/BeforeValidException.php';
// include_once 'libs/php-jwt-master/src/ExpiredException.php';
// include_once 'libs/php-jwt-master/src/SignatureInvalidException.php';
// include_once 'libs/php-jwt-master/src/JWT.php';



require_once "../controller/usuario_controller.php";

$usr = new UsuarioController();

$result = $usr->getById("1");


$token = array(
    "iss" => $iss,
    "aud" => $aud,
    "iat" => $iat,
    "nbf" => $nbf,
    "data" => array(
        "id" => $result->id,
        "nombre" => $result->nombre,
        "apellido" => $result->apellido,
        "email" => $result->email
    )
 );

//  echo $token;
//  echo $_POST['email'];

 // set response code
 http_response_code(200);

 // generate jwt
 $jwt = JWT::encode($token, $key);


 $json = file_get_contents('php://input');
 $data = json_decode($json);

 $plano = JWT::decode($jwt, $key, array('HS256'));

 echo json_encode(
         array(
             "message" => "Successful login.",
             "jwt" => $jwt,
             "data" => $data,
             "email" => $data->email,
             "password" => $data->password, 
             "plano" => $plano->data
         )
     );

?>
