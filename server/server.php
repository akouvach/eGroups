<?php

$request =  $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$base = $_SERVER['BASE'];
$host = $_SERVER['HTTP_HOST'];
$servername = $_SERVER['SERVER_NAME'];
$querystring = $_SERVER['QUERY_STRING'];

echo "\n</br>request: ".$request; 
echo "\n</br>uri: ".$uri; 
echo "\n</br>base: ".$base; 
echo "\n</br>host: ".$host; 
echo "\n</br>servername: ".$servername; 
echo "\n</br>querystring: ".$querystring; 

echo "\n</br>-------------------------------------------------------</br>";

// foreach($_SERVER as $key=>$value){
//     echo "</br>".$key."->".$value;
// }


?>
