<?php

require_once "../model/usuario.php";

class UsuarioController {
  
  private $model;

  public function __construct(){
      $this->model = new Usuario();
  }


  public function getAll(){
      return $this->model->getAll();
  }

  public function getById($id){
      return $this->model->getById($id);
  }

  public function getCredentials($email,$password){
      return $this->model->getCredentials($email, $password);
  }

}
?>
