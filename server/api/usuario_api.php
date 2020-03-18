<?php
include_once '../core/error_core.php';
include_once '../core/jwt_core.php';
include_once '../controller/usuario_controller.php';

// required headers
header("Access-Control-Allow-Origin: http://localhost/api/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
$authToken = getallheaders()["Authorization"];
$authToken = str_replace("Bearer ","",$authToken); 

$auth = isAuthenticated($authToken, $key);

if($auth->ok){
    //Tengo  código correctos.  Voy a hacer lo que corresponda aquí

    $usr = new UsuarioController;

    try {
        $result = $usr->getAll();
        $json = json_encode(["ok"=>true,"payload"=> $result]);
    } catch (Exception $ex){
        $json = json_encode(["ok"=>false,"payload"=> $ex->__toString()]);
    } catch (Error $err){
        $json = json_encode(["ok"=>false,"payload"=> $err->__toString()]);
    } finally {
        // set response code
        http_response_code(200);
        echo $json;
    }


   
} else {

    // este usuario no tiene permisos
    http_response_code(401);

    $error = "Usuario y contraseña no encontrados. " . $auth->payload;
    //myError(2, $error );

    // myError(2, $error);



    echo json_encode(
        array(
            "ok" => false,
            "payload" => $error
        )
    );

}


// $json_string = json_decode($data);

// switch (json_last_error()) {
//     case JSON_ERROR_NONE:
//         $rta = $rta . ' - No errors';
//     break;
//     case JSON_ERROR_DEPTH:
//         $rta = $rta .  ' - Maximum stack depth exceeded';
//     break;
//     case JSON_ERROR_STATE_MISMATCH:
//         $rta = $rta .  ' - Underflow or the modes mismatch';
//     break;
//     case JSON_ERROR_CTRL_CHAR:
//         $rta = $rta .  ' - Unexpected control character found';
//     break;
//     case JSON_ERROR_SYNTAX:
//         $rta = $rta .  ' - Syntax error, malformed JSON';
//     break;
//     case JSON_ERROR_UTF8:
//         $rta = $rta .  ' - Malformed UTF-8 characters, possibly incorrectly encoded';
//     break;
//     default:
//         $rta = $rta .  ' - Unknown error';
//     break;
// }
 
?>


