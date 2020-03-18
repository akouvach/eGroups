<?php

require_once "../model/usuario.php";

class UsuarioController {
  private $model;

  public function __construct(){
    try {
        $this->model = new Usuario();
    } catch (Exception $ex){
      throw new Exception ($ex->getMessage());
    }    

  }


  public function getAll(){
    try {
      $result = $this->model->getAll();
      return $result;
    } catch (Exception $ex){
      throw new Exception($ex->getMessage());
    }

  }

  public function getById($id){
    try {
        $result = $this->model->getById($id);
        return $result;
    } catch (Exception $ex){
      throw new Exception ($ex->getMessage());
    }    
  }

  public function getCredentials($email,$password){
    try {
      $result = $this->model->getCredentials($email, $password);
      return $result;
    } catch (Exception $ex){
      throw new Exception ($ex->getMessage());
    }
  }

}
?>
