<?php
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();
$idPedido = $_GET['idpedido'];
$instruccion = "SELECT productos.ID, productos.ID_PEDIDO, productos.CANTIDAD, productos.ID_SABOR, sabores.DESCRIPCION AS 'SABOR', productos.ID_RELLENO, rellenos.DESCRIPCION AS 'RELLENO', productos.ID_COBERTURA, coberturas.DESCRIPCION AS 'COBERTURA', productos.ID_TAMANO, tamanos.DESCRIPCION AS 'TAMANO', productos.ESPECIFICACIONES, productos.IMG FROM productos LEFT JOIN sabores ON productos.ID_SABOR = sabores.ID LEFT JOIN rellenos ON productos.ID_RELLENO = rellenos.ID LEFT JOIN coberturas ON productos.ID_COBERTURA = coberturas.ID LEFT JOIN tamanos ON productos.ID_TAMANO = tamanos.ID WHERE ID_PEDIDO = '".$idPedido."';";
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