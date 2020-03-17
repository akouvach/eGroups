
<?php

class Conexion {

    private $driver = "mysql";
    private $host = "localhost";
    private $user = "root";
    private $pass = "";
    private $dbName =  "participemos";
    private $charset = "utf8";

    protected function conex(){
        try {
            $pdo = new PDO("{$this->driver}:host={$this->host};dbname={$this->dbName};charset={$this->charset}",$this->user,$this->pass);

            if($pdo){
              $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
              return $pdo;
            } else {
              echo "error en la conexion";
              return null;
            }

        } catch (PDOException $err){

            echo $err->getMessage();
            return null;

        }

    }



}
?>
