<?php

require_once "conexion.php";

abstract class Crud extends Conexion {

    private $table;
    protected $pdo;

    public function __construct($table){
        $this->table = $table;
        //$this->pdo = parent::conexion();
        try {
            $this->pdo = parent::conex();
            if(is_null($this->pdo)){
                throw new Exception("No se pudo conectar a la base de datos");
            }
        } catch (PDOException $err){
            throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }    
    }

    public function __get($name){
        return $this->$name;
    }

    public function __set($name, $value){
        $this->$name = $value;
    }

    public function __destruct() {
        //parent::__destruct();
        // close the database connection
        $this->pdo = null;
    }






    public function getAll(){

        try {
            $stmt = $this->pdo->prepare("select * from $this->table");
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

            // $stmt->execute();
            return $result;
        } catch (PDOException $err) {
            throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }

    }

    public function getById($id){

        try {
            $stmt = $this->pdo->prepare("select * from $this->table where id=?");
            $stmt->execute(array($id));
            $result = $stmt->fetch(PDO::FETCH_OBJ);
            return $result;
        } catch (PDOException $err) {
            throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }

    }

    public function delete($id){

        try {
            $stmt = $this->pdo->prepare("delete from $this->table where id=?");
            $stmt->execute(array($id));
            $result = $stmt.mysqli_fetch_all(PDO::FETCH_OBJ);
            return $result;
        } catch (PDOException $err) {
            throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }
            }


    abstract function create();

    abstract function update();




    }



?>
