<?php
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();

$ID_EMPLEADO = $_POST['ID_EMPLEADO'];
$FECHA_REGISTRO = $_POST['FECHA_REGISTRO'];
$FECHA_ENTREGA = $_POST['FECHA_ENTREGA'];
$ID_CLIENTE = $_POST['ID_CLIENTE'];

$instruccion = "INSERT INTO pedidos(ID_EMPLEADO,FECHA_REGISTRO,FECHA_ENTREGA,ID_CLIENTE,ESTATUS) VALUES(".$ID_EMPLEADO.",'".$FECHA_REGISTRO."','".$FECHA_ENTREGA."','".$ID_CLIENTE."','INCOMPLETO')";

if ($link->query($instruccion) === TRUE) {
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
        "message"=>"Error"
    );
    echo json_encode($response);
}
  
  $link->close();
  
  ?>