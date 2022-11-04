<html lang="es">
  <head> <?php
        include('../navigation/head.php');
    ?> </head>
  <body> <?php 
        include('../navigation/menu.php');
    ?> 
    <div class="container-fluid">
      <div class="row backCakes">
        <div class="col-md-8 offset-md-2 formCakes">
          <div class="row g-3 text-center">
            <h1>Nuevo Pedido</h1>
          </div>  
          <!-- Seleccione empleado -->
          <div class="mb-3 row">
            <div class="col-md-4 text-end">
              <label for="listEmpleados" class="col-md-2 col-form-label">Empleado</label>
            </div>
            <div class="col-md-7">
              <select id="listEmpleados" class="form-select" aria-label="Default select example">
                <option value="">Seleccione un empleado</option>
              </select>
            </div>
          </div>
          <!-- fecha entrega -->
          <div class="mb-3 row">
            <div class="col-md-4 text-end">
              <label for="fechaEntrega" class="col-md-2 col-form-label">Fecha de Entrega</label>
            </div>
            <div class="col-md-7">
              <input type="date" class="form-control" id="fechaEntrega">
            </div>
          </div>
          <!-- seleccione cliente -->
          <div class="mb-3 row">
            <div class="col-md-4 text-end">
              <label for="listClientes" class="col-md-2 col-form-label">Cliente</label>
            </div>
            <div class="col-md-7">
              <select id="listClientes" class="form-select" aria-label="Default select example">
                <option value="">Seleccione un cliente</option>
              </select>
            </div>
          </div>
          <!-- datos cliente -->
          <div class="mb-3 row d-none" id="infoCliente">
              <div class="col-md-5 offset-md-1">
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteCalle" class="col-md-2 col-form-label">Calle:</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteCalle" value="">
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteCiudad" class="col-md-2 col-form-label">Ciudad:</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteCiudad" value="">
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteCodigoPostal" class="col-md-2 col-form-label">Codigo Postal:</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteCodigoPostal" value="">
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteNumeroExterior" class="col-md-2 col-form-label">Número Exterior:</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteNumeroExterior" value="">
                  </div>
                </div>
              </div>
              <div class="col-md-5 ">
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteColonia" class="col-md-2 col-form-label">Colonia</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteColonia" value="">
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteEstado" class="col-md-2 col-form-label">Estado</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteEstado" value="">
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-md-4 text-end">
                    <label for="clienteDescripcion" class="col-md-2 col-form-label">Descripción</label>
                  </div>
                  <div class="col-md-7">
                    <input type="text" readonly class="form-control-plaintext" id="clienteDescripcion" value="">
                  </div>
                </div>
              </div>
            </div>
          <!-- end datos clientes -->
          <!-- Add products -->
          <div class="mb-3 row">
            <div class="col-md-4 offset-md-8 text-end ">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalProductos" onclick='openModal()'>
                Añadir producto <i class="bi bi-plus-circle-fill"></i>
              </button>
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


          <!-- show productos -->
          <div class="mb-3 row d-none"   id="tableInfoProductos">
            <div class="col-md-12  text-start ">
              <p class="title-decoration"> Productos </p>
            </div>
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

          <!-- Pagos -->
          <div class="mb-3 row d-none" id="infoPago">
            <div class="col-md-12  text-start ">
              <p class="title-decoration"> Pago </p>
            </div>
              <div class="col-md-6">                
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="nPagos" class="col-md-2 col-form-label">Número de pago:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="number" class="form-control" id="nPagos" value="1">
                        </div>
                    </div>     
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="costoPedido" class="col-md-2 col-form-label">Costo de Pedido:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="number" class="form-control" id="costoPedido" value="">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="costoEnvio" class="col-md-2 col-form-label">Costo de envio:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="number" class="form-control" id="costoEnvio" value="">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="anticipo" class="col-md-2 col-form-label">Anticipo:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="number" class="form-control" id="anticipo" value="">
                        </div>
                    </div>
              </div>
              <div class="col-md-6">
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="costoTotal"  class="col-md-2 col-form-label">Costo total:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="costoTotal" value="" readonly>
                        </div>
                    </div>     
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="restante" disabled  class="col-md-2 col-form-label">Restante:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="restante" value="" readonly>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="metodoPago" class="col-md-2 col-form-label">Metodo de pago:</label>
                        </div>
                        <div class="col-md-5">
                                <select id="metodoPago" class="form-select" aria-label="Default select example">
                                  <option value="">Seleccione un relleno</option>
                                  <option value="Efectivo">Efectivo</option>
                                  <option value="Transferencia">Transferencia</option>
                                </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-md-6 text-end">
                            <label for="pagado" class="col-md-2 col-form-label">Pagado:</label>
                        </div>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="pagado" value="" readonly>
                        </div>
                    </div>
                  </div>
                  <div class="mb-3 row text-end">
                    <div class="col-md-4 offset-8">
                        <button type="button" class="btn btn-primary" onclick='completePedidoPago()' >Guardar pago</button>
                    </div>
                  </div>
          </div>



         
          <!-- end pagos -->
          <!-- end div cakes -->
        </div>
      </div>


    </div>

         
         
         
         <?php
        include('../navigation/footer.php');
    ?> <script src="../src/js/clientes.js"></script>
          <script src="../src/js/empleados.js"></script>
          <script src="../src/js/productos.js"></script>
          <script src="../src/js/sabores.js"></script>
          <script src="../src/js/coberturas.js"></script>
          <script src="../src/js/tamanos.js"></script>
          <script src="../src/js/rellenos.js"></script>
          <script src="../src/js/nuevoPedido.js"></script>
  </body>
</html>