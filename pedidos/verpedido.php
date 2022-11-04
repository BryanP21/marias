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
                   <div class="col-md-12 pdt1">
                        <h1>Detalles del Pedido</h1>
                   </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table" id="tableGeneralInfo">
                                <thead>
                                    <th>Fecha de emisión</th>
                                    <th colspan="2">Datos del cliente</th>
                                    <th>Fecha de entrega</th>
                                </thead>
                                <tbody id="generalInfo">
                                    &nbsp;
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row g-3 text-center">
                   <div class="col-md-12 pdt1">
                        <h1>Productos</h1>
                   </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                        <table class="table ">
                            <thead>
                                <tr>
                                <th scope="col text-center align-middle">#</th>
                                <th scope="col text-center align-middle">Cantidad</th>
                                <th scope="col text-center align-middle">Especificaciones</th>
                                <th scope="col text-center align-middle">Sabor</th>
                                <th scope="col text-center align-middle">Relleno</th>
                                <th scope="col text-center align-middle">Tamaño</th>
                                <th scope="col text-center align-middle">Cobertura</th>
                                <th scope="col text-center align-middle">Referencia</th>
                                </tr>
                            </thead>
                            <tbody id="tableProductos">
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <div class="row g-3 text-center">
                   <div class="col-md-12 pdt1">
                        <h1>Pagos</h1>
                   </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col text-center align-middle">#</th>
                                    <th scope="col text-center align-middle">Forma de pago</th>
                                    <th scope="col text-center align-middle">Monto</th>
                                </tr>
                            </thead>
                            <tbody id="tablePagos">
                            </tbody>
                        </table>
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
    <script src="../src/js/productos.js"></script>
    <script src="../src/js/pagos.js"></script>
    <script src="../src/js/clientes.js"></script>
</body>
</html>
