<?php
/* error_reporting(E_ALL);
ini_set('display_errors','On'); */
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
include("../upload/upload.php");

 $link = conectarse();

$ID_PEDIDO = $_POST['ID_PEDIDO'];
$CANTIDAD = $_POST['CANTIDAD'];
$ID_SABOR = $_POST['ID_SABOR'];
$ID_RELLENO = $_POST['ID_RELLENO'];
$ID_TAMANO = $_POST['ID_TAMANO'];
$ID_COBERTURA = $_POST['ID_COBERTURA'];
$ESPECIFICACIONES = $_POST['ESPECIFICACIONES'];

$uploadFileResult = uploadFile();
/* var_dump($uploadFileResult['img_name']); */

if($uploadFileResult['success']){
    $img_src = str_replace("..","",$uploadFileResult["img_name"]);
    $instruccion = "INSERT INTO productos VALUES(null,'".$ID_PEDIDO."','".$CANTIDAD."','".$ID_SABOR."','".$ID_RELLENO."','".$ID_TAMANO."','".$ID_COBERTURA."','".$ESPECIFICACIONES."','".$img_src."');";

    if ($link->query($instruccion) === TRUE  ) {
        $last_id = $link->insert_id;
        http_response_code(201); 
        $response = array(
            "success"=>true,
            "data"=>$last_id
        );
        echo json_encode($response);
    } else {
        http_response_code(500); 
        $response = array(
            "success"=>false,
            "message"=> "Error: " . $instruccion . "<br>" . $link->error
        );
        echo json_encode($response);
    }
}


  
  $link->close(); 
  
  ?>