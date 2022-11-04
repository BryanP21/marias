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
                    <div class="col-md-11 pdt1">
                        <h1>Productos</h1>
                   </div>
                   <div class="col-md-1 addpedidos">
                        <a href="javascript:void(0)" onclick="openModal()"><i class="bi bi-plus-circle-fill click-pedidos"></i></a>
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
                                <th scope="col text-center align-middle">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="tableProductos">
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <div class="row g-3 text-center">
                    <div class="col-md-11 pdt1">
                            <h1>Pagos</h1>
                    </div>
                    <div class="col-md-1 addpedidos">
                            <a href="javascript:void(0)" onclick='openModalPagos()'><i class="bi bi-plus-circle-fill click-pedidos"></i></a>
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
                                    <th scope="col text-center align-middle">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="tablePagos">
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

                  <!-- Add products -->
          <div class="mb-3 row">
            <div class="col-md-4 offset-md-8 text-end ">
              <div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>
              <!-- Modal -->
              <div class="modal fade" id="modalProductos" tabindex="-1" role="dialog" aria-labelledby="modalProductosLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel"> Añadir producto</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick='closeModal()'>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row">

                        <div class="col-md-6">
                          <div class="mb-3 row">
                            <div class="col-md-6">
                                <label for="cantidadProducto" class="col-form-label">Cantidad:</label>
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" id="cantidadProducto" value="1">
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          &nbsp;
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3 row">
                            <div class="col-md-6">
                                <label for="saborProducto" class="col-form-label">Sabor:</label>
                            </div>
                            <div class="col-md-6">
                              <select id="saborProducto" class="form-select" aria-label="Default select example">
                                <option value="">Seleccione un sabor</option>
                              </select>
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <div class="col-md-6">
                                <label for="rellenoProducto" class="col-form-label">Relleno:</label>
                            </div>
                            <div class="col-md-6">
                              <select id="rellenoProducto" class="form-select" aria-label="Default select example">
                                  <option value="">Seleccione un relleno</option>
                                </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mb-3 row">
                              <div class="col-md-6">
                                  <label for="tamanoProducto" class="col-form-label">Tamaño:</label>
                              </div>
                              <div class="col-md-6">
                                <select id="tamanoProducto" class="form-select" aria-label="Default select example">
                                  <option value="">Seleccione un relleno</option>
                                </select>
                              </div>
                            </div>
                            <div class="mb-3 row">
                              <div class="col-md-6">
                                  <label for="coberturaProducto" class="col-form-label">Cobertura:</label>
                              </div>
                              <div class="col-md-6">
                                <select id="coberturaProducto" class="form-select" aria-label="Default select example">
                                  <option value="">Seleccione una cobertura</option>
                                </select>
                              </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                          <div class="mb-3 text-start">
                            <label for="especificacionesProducto" class="col-form-label">Especificaciones:</label>
                            <textarea class="form-control" id="especificacionesProducto" rows="3"></textarea>
                          </div>
                          <div class="mb-3 text-start">
                            <label for="referenciaProducto" class="col-form-label">Referencia:</label>
                            <input type="file" class="form-control" id="referenciaProducto">
                          </div>
                        </div>

                      </div>
                    </div>

                      
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick='closeModal()'>Cancelar</button>
                      <button type="button" class="btn btn-primary" onclick='agregarProductoPedido()'>Añadir producto</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


                            <!-- Add payments -->
        <div class="mb-3 row">
            <div class="col-md-4 offset-md-8 text-end ">
              <div class="modal-backdrop fade show" id="backdrop-pagos" style="display: none;"></div>
              <!-- Modal -->
              <div class="modal fade" id="modalPagos" tabindex="-1" role="dialog" aria-labelledby="modalPagosLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">

                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel"> Añadir pago</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick='closeModalPagos()'>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                        <div class="row">

                            <div class="col-md-12">
                            <div class="mb-3 row">
                                <div class="col-md-6 text-end">
                                    <label for="formaPago" class="col-md-2 col-form-label">Metodo de pago:</label>
                                </div>
                                <div class="col-md-6">
                                        <select id="formaPago" class="form-select" aria-label="Default select example">
                                        <option value="">Seleccione un relleno</option>
                                        <option value="Efectivo">Efectivo</option>
                                        <option value="Transferencia">Transferencia</option>
                                        </select>
                                </div>
                            </div>

                                <div class="mb-3 row">
                                    <div class="col-md-6">
                                        <label for="montoPago" class="col-form-label">Monto:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" class="form-control" id="montoPago" value="1">
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        </div>                     
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick='closeModalPagos()'>Cancelar</button>
                      <button type="button" class="btn btn-primary" onclick='agregarPagoPedido()'>Añadir pago</button>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

        <div class="row g-3 text-center">
            <div class="col-md-6 offset-3 pdt1 text-middle">
                <h1>Modificar costos del pedido</h1>
                <div class="mb-3 text-start">
                    <label for="costoProducto" class="col-form-label">Monto:</label>
                    <input type="number" class="form-control" id="costoProducto">
                </div>
                <div class="mb-3 text-start">
                    <label for="envioProducto" class="col-form-label">Envio:</label>
                    <input type="number" class="form-control" id="envioProducto" value="0">
                </div> 
                <div class="mb-3 text-center">
                    <button type="button" class="btn btn-primary" onclick='actualizarCostosPedido()'>Actualizar</button>
                </div>
            </div>
        </div> 
 


            </div>
    </div>

    </div>
    <?php
        include('../navigation/footer.php');
    ?>
    <script src="../src/js/sabores.js"></script>
    <script src="../src/js/coberturas.js"></script>
    <script src="../src/js/tamanos.js"></script>
    <script src="../src/js/rellenos.js"></script>
    <script src="../src/js/pedidos.js"></script>
    <script src="../src/js/productos.js"></script>
    <script src="../src/js/pagos.js"></script>
    <script src="../src/js/clientes.js"></script>
</body>
</html>
