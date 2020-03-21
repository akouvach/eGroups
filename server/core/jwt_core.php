<?php
require '../vendor/autoload.php';

use Firebase\JWT\JWT;

require_once "../controller/usuario_controller.php";

// show error reporting
error_reporting(E_ALL);
 
// set your default time-zone
date_default_timezone_set('America/Argentina/Buenos_Aires');
 
// variables used for jwt
$key = "tu secreto es: la suerte del principiante no puede fallar - twsagi6()";
$iss = "http://localhost/api/";
$aud = "http://localhost/api/";
$iat = 1356999524;
$nbf = 1357000000;


function getCredentials($data){

    try {
        //Abro una instancia del objeto usuario para ir a buscar sus credenciales
        $usr = new UsuarioController();
        //busco que me devuelva las credenciales el usuario y contraseña que le envío
        $result = $usr->getCredentials($data->email, $data->password);
        return $result;
    } catch (Error $err){
        throw $err;
    } catch (Exception $ex){
        throw $ex;
    }

}

function isAuthenticated($token, $key){

    try {
        $plano = JWT::decode($token, $key, array('HS256'));
        return (object)["ok"=>true, "payload"=>$plano->data];        
    } catch (Error $err){        
        return (object)["ok"=>false, "payload"=>$err->__toString()];
    } catch (Exception $ex){
        return (object) ["ok"=>false, "payload"=>$ex->__toString()];
    }
    
}

?>