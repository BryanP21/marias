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
                            <h1>Rellenos</h1>
                    </div>
                    <div class="col-md-1 addpedidos">
                            <a href="./nuevoRelleno.php"><i class="bi bi-plus-circle-fill click-pedidos"></i></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table d-none" id="tablaRellenos">
                            <thead>
                                <tr>
                                    <th scope="col align-middle text-center">ID</th>
                                    <th scope="col align-middle text-center">DESCRIPCIÓN</th>
                                    <th scope="col align-middle text-center">ESTATUS</th>
                                    <th scope="col align-middle text-center">ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody id="tBodyRellenos">
                                &nbsp;

                            </tbody>
                        </table> 
                        <p id="sinRellenos">Aun no hay rellenos.</p>
                    </div> 
                    </div>
                </div>
            </div>
    </div>

    </div>
    <?php
        include('../navigation/footer.php');
    ?>
    <script src="../src/js/rellenos.js"></script>
</body>
</html>
