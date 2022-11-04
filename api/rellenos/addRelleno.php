<?php
/* error_reporting(E_ALL);
ini_set('display_errors','On'); */
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");

 $link = conectarse();

$DESCRIPCION = $_POST['DESCRIPCION'];   
$ESTATUS = $_POST['ESTATUS'];

    $instruccion = "INSERT INTO rellenos(DESCRIPCION,ESTATUS) VALUES('".$DESCRIPCION."','".$ESTATUS."');";

    if ($link->query($instruccion) === TRUE  ) {
        $last_id = $link->insert_id;
        http_response_code(200); 
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


  
  $link->close(); 
  
  ?>