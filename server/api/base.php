<?php
include_once '../core/jwt_core.php';
include_once '../core/error_core.php';

header("Access-Control-Allow-Origin: http://localhost/api/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if($_SERVER['REQUEST_METHOD']=='POST') {

    $authToken = getallheaders()["Authorization"];
    $authToken = str_replace("Bearer ","",$authToken); 
    
    $auth = isAuthenticated($authToken, $key);
    
    if($auth->ok){
        //Tengo  código correctos.  Voy a hacer lo que corresponda aquí
    
        //Recibo los datos enviados por un fetch post con json
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        // set response code
        http_response_code(200);

        echo json_encode(
            array(
                "ok"=>true,
                "payload"=>$data
            )
        );


    } else {
    
        // este usuario no tiene permisos
        http_response_code(401);
    
        $error = "Usuario y contraseña no encontrados. " . $auth->payload;
        //myError(2, $error );
    
        echo json_encode(
            array(
                "ok" => false,
                "payload" => $error
            )
        );
    
    }

} else {
    echo json_encode(
        array(
            "ok" => false,
            "payload" => "Solo POST request"
        )
    );
}

?>
