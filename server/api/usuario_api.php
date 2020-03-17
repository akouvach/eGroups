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



// require_once "../controller/usuario_controller.php";

// $usr = new UsuarioController();

// $result = $usr->getById("1");


// $token = array(
//     "iss" => $iss,
//     "aud" => $aud,
//     "iat" => $iat,
//     "nbf" => $nbf,
//     "data" => array(
//         "id" => $result->id,
//         "nombre" => $result->nombre,
//         "apellido" => $result->apellido,
//         "email" => $result->email
//     )
//  );

//  echo $token;
//  echo $_POST['email'];

 // set response code
 http_response_code(200);

 $data = trim(file_get_contents('php://input'));

 $json = json_decode($data);


 if ($json === false) {
    // Avoid echo of empty string (which is invalid JSON), and
    // JSONify the error message instead:
    $json = json_encode(["jsonError" => json_last_error_msg()]);
    if ($json === false) {
        // This should not happen, but we go all the way now:
        $json = '{"jsonError":"unknown"}';
    }
    // Set HTTP response status code to: 500 - Internal Server Error
    http_response_code(500);
}

$plano = JWT::decode($json->token, $key, array('HS256'));

$json = json_encode(["rta" => $plano]);
echo $json;

 //  "payload":[{"model":"usuarios","filter":[{"field":"id","value":1}]}]

// ciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2Vncm91cHNcL2FwaVwvIiwiYXVkIjoiaHR0cDpcL1wvbG9jYWxob3N0XC9lZ3JvdXBzXC9hcGlcLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoiMSIsIm5vbWJyZSI6IkFuZHJlcyIsImFwZWxsaWRvIjoiS291dmFjaCIsImVtYWlsIjoiYWtvdXZhY2hAeWFob28uY29tMiJ9fQ.nIk90QQs8ltf9dvQ1SAUzF5tZEDPfIIRZtfHP7BzmZk

//$json = '{"token":"eyJ0eXAiOiJKV1QiLCJhbG"}';
//$json = '{"nombre":"andres"}';
//$data = '{"Coords":[{"Accuracy":"65","Latitude":"53.277720488429026","Longitude":"-9.012038778269686","Timestamp":"Fri Jul 05 2013 11:59:34 GMT+0100 (IST)"},{"Accuracy":"65","Latitude":"53.277720488429026","Longitude":"-9.012038778269686","Timestamp":"Fri Jul 05 2013 11:59:34 GMT+0100 (IST)"},{"Accuracy":"65","Latitude":"53.27770755361785","Longitude":"-9.011979642121824","Timestamp":"Fri Jul 05 2013 12:02:09 GMT+0100 (IST)"},{"Accuracy":"65","Latitude":"53.27769091555766","Longitude":"-9.012051410095722","Timestamp":"Fri Jul 05 2013 12:02:17 GMT+0100 (IST)"},{"Accuracy":"65","Latitude":"53.27769091555766","Longitude":"-9.012051410095722","Timestamp":"Fri Jul 05 2013 12:02:17 GMT+0100 (IST)"}]}';
//$data = '{"a":"andres","nombre":8}';
//$json[] = '{"Organization": "PHP Documentation Team"}';

// if ($data->token=="hola"){

//     echo "cualquiera";

// } else {
//     $json = json_encode($data);
//     echo $json;
    
// }



// try {
//     if ($json->token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2Vncm91cHNcL2FwaVwvIiwiYXVkIjoiaHR0cDpcL1wvbG9jYWxob3N0XC9lZ3JvdXBzXC9hcGlcLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoiMSIsIm5vbWJyZSI6IkFuZHJlcyIsImFwZWxsaWRvIjoiS291dmFjaCIsImVtYWlsIjoiYWtvdXZhY2hAeWFob28uY29tMiJ9fQ.nIk90QQs8ltf9dvQ1SAUzF5tZEDPfIIRZtfHP7BzmZk"){
//         echo json_encode('{"jsonError":"OK"}');
//     } else {
//         echo json_encode('{"jsonError":" NO OK"}');
//     }
    
// } catch (Error $error){
//     echo json_encode('{"jsonError":" Error ' . $error . '"}');

// }

//echo json_encode(["jsonError" => $json["token"]]);
//echo $json_string->a;


//$data = '{"Peter":"andres","Ben":37,"Joe":43}';

    // $rta = "";
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


    // if (is_null($json_string)){
    //     $rta = $rta .  "Error en conversion";
    // } else {
    //     $rta = $rta . "rta-->" . $json_string->a;
    // }
    
    // echo json_encode($rta);




// echo $obj->Peter;
// echo $obj->Ben;
// echo $obj->Joe;

 //echo $decoded["token"];

//  $data = json_encode($json);
//  echo $data;

 //$ult = json_decode($data);
 //echo $ult->token;
 
 //$jwt = $data->jwt;


 //echo $_POST["token"];

 //echo json_encode($data);

 //  $plano = JWT::decode($jwt, $key, array('HS256'));

//  echo json_encode(
//          array(
//              "message" => "Successful login.",
//              "plano" => $plano
//          )
//      );

?>
