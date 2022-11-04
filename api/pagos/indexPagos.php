<?php
 error_reporting(0);
ini_set('display_errors','Off');
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$idPedido = $_GET['idpedido'];
$link = conectarse();
$instruccion = "SELECT * FROM pagos WHERE ID_PEDIDO = ".$idPedido.";";

$query =  $link->query($instruccion);

$data = [];
$response =[];


if ($query->num_rows > 0) {
    while($row = $query->fetch_assoc()) {
        array_push($data,$row);
      }
      $response = array(
        "success"=>true,
        "rows"=>$query->num_rows,
        "data"=>$data
    );
}else{
    $response = array(
        "success"=>false,
        "message"=>"Not records found"
    );
}
echo json_encode($response);
?>