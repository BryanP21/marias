<?php
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();

$ID_PEDIDO = $_POST['ID_PEDIDO'];


$instruccion = "UPDATE pedidos SET  ESTATUS = 'ENTREGADO' WHERE ID = '".$ID_PEDIDO."';";

if ($link->query($instruccion) === TRUE  ) {
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