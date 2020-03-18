<?php
include_once '../core/jwt_core.php';
include_once '../core/error_core.php';

require '../vendor/autoload.php';

use Firebase\JWT\JWT;


if($_SERVER['REQUEST_METHOD']=='POST') {

    //Recibo los datos enviados por un fetch post con json
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    //Obtento el usuario correspondiente
    $result = getCredentials($data);

    //si me trae algún resultado es que encontró la combinación de usuario y contraseña
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

        // genero el token con los datos que me enviaron
        $jwt = JWT::encode($token, $key);

        //Seteo cabesera y devuelvo el token
        http_response_code(200);
        echo json_encode(
            array(
                "ok" => true,
                "jwt" => $jwt
            )
        );

    } else {
        // este usuario no tiene permisos
        http_response_code(401);
    
        $error = "Usuario y contraseña no encontrados";
        myError(2, $error );

        echo json_encode(
            array(
                "ok" => false,
                "mensaje" => $error
            )
        );

    }

} else {
    myError(1,'{"msg":"Error - Just POST"}');
}



?>
