<?php
header('Content-Type: application/json; charset=utf-8');
include("../../config/config.php");
$link = conectarse();

$ID_PEDIDO = $_POST['ID_PEDIDO'];
$MONTO = $_POST['MONTO'];
$ENVIO = $_POST['ENVIO'];
$data = [];
$instruccion = "UPDATE pedidos SET  MONTO = '".$MONTO."', ENVIO = '".$ENVIO."'  WHERE ID = '".$ID_PEDIDO."';";

if ($link->query($instruccion) === TRUE  ) {
    $instruccionCheckPagado = "SELECT SUM(pedidos.MONTO+pedidos.ENVIO) AS 'TOTAL',(SELECT SUM(pagos.MONTO) FROM pagos WHERE pagos.ID_PEDIDO = pedidos.ID)  AS 'TOTAL_PAGOS' FROM pedidos WHERE id = ".$ID_PEDIDO.";";
    $querys =  $link->query($instruccionCheckPagado);
    if ($querys->num_rows > 0) {
        while($row = $querys->fetch_assoc()) {
            array_push($data,$row);
          }
          if($data[0]['TOTAL'] == $data[0]['TOTAL_PAGOS']){

            /* Actualizamos */
            $instruccionPagado = "UPDATE pedidos SET PAGADO = 'Si' WHERE ID = '".$ID_PEDIDO."';";
            if ($link->query($instruccionPagado) === TRUE  ) {
                    http_response_code(200); 
                    $response = array(
                        "success"=>true
                    );
                    echo json_encode($response); 
                    return;
            }
        }elseif($data[0]['TOTAL'] > $data[0]['TOTAL_PAGOS']){
            /* Actualizamos */
            $instruccionPagado = "UPDATE pedidos SET PAGADO = 'No' WHERE ID = '".$ID_PEDIDO."';";
            if ($link->query($instruccionPagado) === TRUE  ) {
                    http_response_code(200); 
                    $response = array(
                        "success"=>true
                    );
                    echo json_encode($response); 
                    return;
            }
        }
    }
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