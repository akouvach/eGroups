
<?php

function myError($errorLevel, $errorMessage){    
    
    echo json_encode(
        array(
            "ok" => false,
            "payload" => $errorMessage
        )
    );


    // if($errorLevel==1){
    //     die($errorMessage);
    // } else {
    //     exit;
    // };
}

?>
