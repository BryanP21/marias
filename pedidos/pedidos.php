<html lang="es">
<head>
    <?php
        include('../navigation/head.php');
    ?>
    <link href="../src/css/pedidos.css" rel="stylesheet">
</head>
<body>
    <?php 
        include('../navigation/menu.php');
    ?>
    <div class="container-fluid">
        <div class="row backCakes">
            <div class="col-md-10 offset-md-1 formCakes">
                <div class="row g-3 text-center">
                   <div class="col-md-11 pdt1">
                        <h1>Pedidos</h1>
                   </div>
                   <div class="col-md-1 addpedidos">
                        <a href="./nuevoPedido.php"><i class="bi bi-plus-circle-fill click-pedidos"></i></a>
                   </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table d-none" id="tablaPedidos">
                            <thead>
                                <tr>
                                    <th scope="col align-middle text-center">ID</th>
                                    <th scope="col align-middle text-center">EMPLEADO</th>
                                    <th scope="col align-middle text-center">FECHA_REGISTRO</th>
                                    <th scope="col align-middle text-center">FECHA_ENTREGA</th>
                                    <th scope="col align-middle text-center">MONTO</th>
                                    <th scope="col align-middle text-center">ENVIO</th>
                                    <th scope="col align-middle text-center">TOTAL</th>
                                    <th scope="col align-middle text-center">ANTICIPO</th>
                                    <th scope="col align-middle text-center">PAGADO</th>
                                    <th scope="col align-middle text-center">ESTATUS</th>
                                    <th scope="col align-middle text-center">ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody id="tBodyPedidos">
                                &nbsp;

                            </tbody>
                        </table> 
                        <p id="sinPedidos">Aun no hay pedidos registrados.</p>
                    </div> 
                    </div>
                </div>
            </div>
    </div>

    </div>
    <?php
        include('../navigation/footer.php');
    ?>
    <script src="../src/js/pedidos.js"></script>
</body>
</html>
