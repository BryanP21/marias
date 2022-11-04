<?php
/* error_reporting(E_ALL);
ini_set('display_errors','On'); */
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();

$ID_PRODUCTO = $_POST['ID_PRODUCTO'];


    $instruccion = "DELETE FROM productos WHERE ID = ".$ID_PRODUCTO.";";

    if ($link->query($instruccion) === TRUE  ) {
        $last_id = $link->insert_id;
        http_response_code(200); 
        $response = array(
            "success"=>true
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