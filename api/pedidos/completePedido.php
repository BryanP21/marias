<?php
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();

$ID_PEDIDO = $_POST['ID_PEDIDO'];
$MONTO = $_POST['MONTO'];
$ENVIO = $_POST['ENVIO'];
$ANTICIPO = $_POST['ANTICIPO'];
$PAGADO = $_POST['PAGADO'];
$FORMA_PAGO = $_POST['FORMA_PAGO'];


$instruccion = "UPDATE pedidos SET  MONTO = '".$MONTO."', ENVIO = '".$ENVIO."', ANTICIPO = '".$ANTICIPO."', PAGADO = '".$PAGADO."', ESTATUS = 'EN PROCESO'  WHERE ID = '".$ID_PEDIDO."';";
$instruccionPago = "INSERT INTO pagos(ID_PEDIDO,MONTO,FORMA_PAGO) VALUES(".$ID_PEDIDO.",'".$ANTICIPO."','".$FORMA_PAGO."');";

if ($link->query($instruccion) === TRUE && $link->query($instruccionPago)  === TRUE ) {
    http_response_code(200); 
    $response = array(
        "success"=>true
    );
    echo json_encode($response);
} else {
    http_response_code(500); 
    $response = array(
        "success"=>false,
        "message"=> "Error: " . $instruccion . "<br>" .$instruccionPago . "<br>" . $link->error
    );
    echo json_encode($response);
}
  
  $link->close();
  
  ?>