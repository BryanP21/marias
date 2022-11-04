<?php
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();
$instruccion = "SELECT pedidos.ID,pedidos.ID_EMPLEADO,empleados.NOMBRE AS 'EMPLEADO' ,pedidos.FECHA_REGISTRO,pedidos.FECHA_ENTREGA,pedidos.ID_CLIENTE, clientes.NOMBRE AS 'CLIENTE', pedidos.MONTO, pedidos.ENVIO,pedidos.ANTICIPO, pedidos.PAGADO, pedidos.ESTATUS FROM pedidos LEFT JOIN empleados ON pedidos.ID_EMPLEADO = empleados.ID LEFT JOIN clientes ON pedidos.ID_CLIENTE = clientes.ID WHERE ESTATUS <> 'INCOMPLETO' AND ESTATUS <> 'ELIMINADO'  ORDER BY ID DESC;";
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