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
                        <h1>Nuevo Relleno</h1>
                   </div>
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="descripcionRelleno" class="form-label">DESCRIPCIÓN</label>
                            <input type="text" class="form-control" id="descripcionRelleno" placeholder="Vainilla">
                        </div>
                        <div class="mb-3">
                            <label for="estatusRelleno" class="form-label">ESTATUS</label>
                            <select id="estatusRelleno" class="form-select" aria-label="Default select example">
                                <option value="">Seleccione un estatus</option>
                                <option value="ACTIVO">Activo</option>
                                <option value="INACTIVO">Inactivo</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <div class="col-md-1 offset-11">
                                <button type="button" class="btn btn-primary" onclick='nuevoRelleno()' >Guardar</button>
                            </div>
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
