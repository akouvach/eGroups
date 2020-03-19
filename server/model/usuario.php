<?php

require_once "../core/crud.php";

class Usuario extends Crud {

    private $nombre;
    private $apellido;
    private $email;
    private $pass;
    private $ciudad_residencia;
    private $genero;
    private $fecha_nac;


    const TABLE = "usuarios";

    public function __construct(){
        parent::__construct(self::TABLE);
    }

    public function __get($name){
        return $this->$name;
    }

    public function __set($name, $value){
        $this->$name = $value;
    }


    public function create(){
        try {
            $sql = "insert into ".self::TABLE." (nombre, apellido, email, pass, fecha_nac, genero, ciudad_residencia) values(?,?,?,?,?,?,?)";
            $stmt = $this->pdo->prepare($sql);
            $result = $stmt->execute(array($this->nombre, $this->apellido, $this->email, $this->pass, $this->fecha_nac, $this->genero, $this->ciudad_residencia));
            return $result;
        } catch (PDOException $err){
          throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }    
    }

    public function update(){
        try {
          $sql = "update ".self::TABLE." set nombre=?, apellido=?, email=?, pass=?, fecha_nac=?, genero=?, ciudad_residencia=? where id = ?";
          $stmt = $this->pdo->prepare($sql);
          $result = $stmt->execute(array($this->nombre, $this->apellido, $this->email, $this->pass, $this->fecha_nac, $this->genero, $this->ciudad_residencia, $this->id));
          return $result;
        } catch (PDOException $err){
            throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }    }

    public function getCredentials($email, $password){
        try {
            $sql = "select id, email, nombre, apellido, fecha_nac from ".self::TABLE." where email = ? and pass = ?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute(array($email, $password));
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            return $result;
        } catch (PDOException $err){
            throw $err;
        } catch (Error $err){
            throw $err;
        } catch (Exception $ex){
            throw $ex;
        }    
    }

}



?>
