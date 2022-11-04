<?php
/* error_reporting(E_ALL);
ini_set('display_errors','On');
var_dump($_FILES); */
function uploadFile(){
    if(isset($_FILES['imagen'])){
        $baseArchivos = "../productos/src/";
    
        /* echo pathinfo($_FILES["imagen"]['name'], PATHINFO_EXTENSION); */
        $name = uniqid()."_.".pathinfo($_FILES["imagen"]['name'], PATHINFO_EXTENSION);
        $nombre_fichero = $baseArchivos.$name;
        if (file_exists($nombre_fichero)) {
            echo "ocupado ".$name;
        }else{
            move_uploaded_file($_FILES['imagen']["tmp_name"], $nombre_fichero);
        }
        $response = array(
            "success"=>true,
            "img_name"=>$nombre_fichero
        );
        return $response;
    }else{
        $response = array(
            "success"=>false
        );
        return $response;
    }
}

?>