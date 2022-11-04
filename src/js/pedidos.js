function indexPedido(idpedido){
    let pedido = new Promise(function(myResolve, myReject) {
        try{
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", async() => {
                if (request.readyState === 4 &&  request.status === 200) {
                    myResolve(JSON.parse(request.responseText));
                }  
            });
            request.open("GET", "/marias/api/pedidos/indexpedido.php?idpedido="+idpedido);
            request.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return pedido;
}

function getPedidos(){
    let pedidos = new Promise(function(myResolve, myReject) {
        try{
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", async() => {
                if (request.readyState === 4 &&  request.status === 200) {
                    myResolve(JSON.parse(request.responseText));
                }  
            });
            request.open("GET", "/marias/api/pedidos/getPedidos.php");
            request.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return pedidos;
}

function showPedidos(){
    getPedidos()
    .then((responseData)=>{
        console.log(responseData);
        if(responseData.success){
            
            document.getElementById('tablaPedidos').classList.remove('d-none');
            document.getElementById('sinPedidos').classList.add('d-none');
            let tBody = document.getElementById('tBodyPedidos');
            tBody.innerText ='';
            for(i=0;i<responseData.data.length;i++){
                let tr = document.createElement("tr");

                let td = document.createElement("td");
                td.innerText = responseData.data[i].ID;
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].EMPLEADO;
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].FECHA_REGISTRO;
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].FECHA_ENTREGA;
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].MONTO;
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].ENVIO;
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = parseFloat(responseData.data[i].MONTO) + parseFloat(responseData.data[i].ENVIO);
                td.className = 'align-middle text-center';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].ANTICIPO;
                td.className = 'align-middle text-center ';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].PAGADO;
                td.className = 'align-middle text-center ';
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerText = responseData.data[i].ESTATUS;
                td.className = 'align-middle text-center ';
                tr.appendChild(td);
                
                td = document.createElement("td");
                let options = '';
                let startOptions = '<div class="dropdown"><button class="btn btn-secondary  bi bi-list" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button><ul class="dropdown-menu">';
                let endOptions = '</ul></div>';

                let optRead = '<li><a class="dropdown-item" href="javascript:void(0)" onclick="verPedido('+responseData.data[i].ID+')">Ver</a></li>';
                let optConcluir = '<li><a class="dropdown-item" href="javascript:void(0)" onclick="concluirPedido('+responseData.data[i].ID+')">Concluir</a></li>';
                let optUpdt = '<li><a class="dropdown-item" href="javascript:void(0)" onclick="actualizarPedido('+responseData.data[i].ID+')">Editar</a></li>';
                let optRem = '<li><a class="dropdown-item" href="javascript:void(0)" onclick="cancelarPedido('+responseData.data[i].ID+')">Cancelar</a></li>';
                
                options = startOptions+optRead;

                    
                if(responseData.data[i].ESTATUS != 'ENTREGADO' && responseData.data[i].ESTATUS != 'CANCELADO'){
                    if(parseFloat(responseData.data[i].ANTICIPO) < (parseFloat(responseData.data[i].MONTO) + parseFloat(responseData.data[i].ENVIO)) && responseData.data[i].PAGADO != 'Si'  && responseData.data[i].ESTATUS == 'EN PROCESO'){   
                       /*  options += optAdd; */
    
                    }else{
                        options += optConcluir;
                    }
                }

                if( responseData.data[i].ESTATUS == 'EN PROCESO'){
                    options += optUpdt;
                    options += optRem;
                }

                options+=endOptions;
                td.innerHTML = options;
                td.className = 'align-middle text-center';
                tr.appendChild(td);
                
                tBody.appendChild(tr);
            }
        }else{
            document.getElementById('tablaPedidos').classList.add('d-none');
            document.getElementById('sinPedidos').classList.remove('d-none');
        }
    })
}

function concluirPedido(id_pedido){
            var data =  new FormData();
            data.append("ID_PEDIDO", id_pedido);
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", async() => {
                if (request.readyState === 4 &&  request.status === 200) {
                    Swal.fire('Pedido concluido correctamente', '', 'success')
                    .then(()=>{
                        showPedidos();
                    });
                }  
            });
            request.open("POST", "/marias/api/pedidos/finishPedido.php");
            request.send(data);
}

function verPedido(id_pedido){
    location.assign('verpedido.php?idpedido='+id_pedido);
}

function actualizarPedido(id_pedido){
    location.assign('actualizarpedido.php?idpedido='+id_pedido);
}

function cancelarPedido(id_pedido){
    var data =  new FormData();
    data.append("ID_PEDIDO", id_pedido);
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", async() => {
        if (request.readyState === 4 &&  request.status === 200) {
            Swal.fire('Pedido cancelado', '', 'success')
            .then(()=>{
                showPedidos();
            });
        }  
    });
    request.open("POST", "/marias/api/pedidos/cancelPedido.php");
    request.send(data);
}


/* Valida desde donde se esta cargando el archivo */
window.onload = function(e){ 
    if(location.pathname == '/marias/pedidos/pedidos.php'){
        showPedidos();
    }


    if(location.pathname == '/marias/pedidos/verpedido.php' || location.pathname == '/marias/pedidos/actualizarpedido.php' ){
        fillData();
    }

}



function fillData(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idpedido = urlParams.get('idpedido');
    localStorage.setItem('idPedido',idpedido);;
    indexPedido(idpedido)
    .then((responsePedido)=>{
        if(responsePedido .success){
            let pedido = responsePedido.data[0];
            console.log(pedido);
            getProductos(idpedido)
            .then((responseProductos)=>{
                console.log(responseProductos);
                let productos = responseProductos.data;
                indexpagos(idpedido)
                .then((responsePagos)=>{
                    let pagos = responsePagos.data;
                    console.log(responsePagos);
                    indexCliente(pedido.ID_CLIENTE)
                    .then((responseCliente)=>{
                        let cliente = responseCliente.data[0];
                        console.log(cliente);

                        fillTablePedido(pedido,cliente);
                        fillTableProductos(responseProductos);
                        fillTablePagos(responsePagos,pedido);
                        /* fillTablePagos(idpedido,pedido.ESTATUS); */

                    })

                });
            });
        }
    });
}

function fillTablePedido(pedido,cliente){
    let tBody = document.getElementById('generalInfo');
    tBody.innerText ='';
    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = pedido.FECHA_REGISTRO;
    td.className = 'align-middle text-center';
    tr.appendChild(td);

    td = document.createElement("td");
    td.colSpan = 2;
    td.innerHTML = cliente.NOMBRE+" "+cliente.APELLIDO_PATERNO+" "+cliente.APELLIDO_MATERNO+"<br>"+cliente.CORREO+"<br>"+cliente.TELEFONO+"<br>"+cliente.CALLE+" "+cliente.NUMERO_EXTERIOR+", "+cliente.COLONIA+", "+cliente.CIUDAD+", "+cliente.ESTADO+" <br> C.P. "+cliente.CODIGO_POSTAL;
    td.className = 'align-middle text-justify';
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = pedido.FECHA_ENTREGA;
    td.className = 'align-middle text-center';
    tr.appendChild(td);

    tBody.appendChild(tr);

    tr = document.createElement("tr");

    td = document.createElement("td");
    td.colSpan = 2;
    td.innerHTML = "<b>Pagado:</b> "+pedido.PAGADO;
    td.className = 'align-middle text-center';

    tr.appendChild(td);


    td = document.createElement("td");
    td.colSpan = 2;
    td.innerHTML = "<b>Estatus:</b> "+pedido.ESTATUS;
    td.className = 'align-middle text-center';

    tr.appendChild(td);
    tBody.appendChild(tr);
}


function fillTableProductos(responseData){
       
        if(responseData.success){
            /*               document.getElementById('tableInfoProductos').classList.remove('d-none');
            document.getElementById('infoPago').classList.remove('d-none'); */
            let tBody = document.getElementById('tableProductos');
            tBody.innerText ='';
            for(i=0;i<responseData.data.length;i++){
                let tr = document.createElement("tr");
                
                  let td = document.createElement("td");
                  td.innerText = i+1;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].CANTIDAD;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].ESPECIFICACIONES;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].SABOR;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].RELLENO;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].TAMANO;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].COBERTURA;
                  td.className = 'align-middle text-center';
                  tr.appendChild(td);
                  
                  td = document.createElement("td");
                  td.innerHTML = "<img src='/marias/api"+responseData.data[i].IMG+"'  width='100' >";
                  td.className = 'align-middle text-center ';
                  tr.appendChild(td);
                  
                
                if(location.pathname == '/marias/pedidos/actualizarpedido.php' ){
                    
                      td = document.createElement("td");
                      td.innerHTML = '<i class="bi bi-dash-circle-fill text-center" id="'+responseData.data[i].ID+'" onclick="removeProduct('+responseData.data[i].ID+')" ></i>';
                      td.className = 'align-middle text-center';
                    tr.appendChild(td); 
                }
                  
                  tBody.appendChild(tr);
                }
        }else{
            let tBody = document.getElementById('tableProductos');
            tBody.innerText ='';
            document.getElementById('tableInfoProductos').classList.add('d-none');
            document.getElementById('infoPago').classList.add('d-none');
        }
}
function fillTablePagos(responseData,pedido){
  
    if(responseData.success){
        /*               document.getElementById('tableInfoProductos').classList.remove('d-none');
        document.getElementById('infoPago').classList.remove('d-none'); */
        let tBody = document.getElementById('tablePagos');
        tBody.innerText ='';
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let sumaPagos = 0;
        for(i=0;i<responseData.data.length;i++){
            let tr = document.createElement("tr");
            let td = document.createElement("td");

              td.innerText = i+1;
              td.className = 'align-middle text-center';
              tr.appendChild(td);
              
              td = document.createElement("td");
              td.innerText = responseData.data[i].FORMA_PAGO;
              td.className = 'align-middle text-center';
              tr.appendChild(td);

              td = document.createElement("td");
              td.innerText = "$"+parseFloat(responseData.data[i].MONTO).toFixed(2);
              td.className = 'align-middle text-center';
              tr.appendChild(td);

              if(location.pathname == '/marias/pedidos/actualizarpedido.php' ){
                document.getElementById('costoProducto').value = parseFloat(pedido.MONTO).toFixed(2);
                document.getElementById('envioProducto').value = parseFloat(pedido.ENVIO).toFixed(2);

                td = document.createElement("td");
                td.innerHTML = '<i class="bi bi-dash-circle-fill text-center" id="'+responseData.data[i].ID+'" onclick="quitarPagoPedido('+responseData.data[i].ID+')" ></i>';
                td.className = 'align-middle text-center';
                tr.appendChild(td); 
              }
           
              
            
              
              tBody.appendChild(tr);
              sumaPagos = parseFloat(responseData.data[i].MONTO) + parseFloat(sumaPagos);
            }

            let colSpanData = 0;
            if(location.pathname == '/marias/pedidos/verpedido.php' ){
                colSpanData = "2";
            }else{

                colSpanData ="3";
            }
            tr = document.createElement("tr");

            td = document.createElement("td");
            td.colSpan =colSpanData;
            td.innerHTML = "<b>PAGOS:</b>";
            td.className = 'align-middle text-end';
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = "$"+parseFloat(sumaPagos).toFixed(2);
            td.className = 'align-middle text-center';
            tr.appendChild(td);

            tBody.appendChild(tr);

            tr = document.createElement("tr");

            td = document.createElement("td");
            td.colSpan =colSpanData;
            td.innerHTML = "<b>COSTO PRODUCTO(S):</b>";
            td.className = 'align-middle text-end';
            tr.appendChild(td);

            td = document.createElement("td");

            td.innerText = "$"+parseFloat(pedido.MONTO).toFixed(2);
            td.className = 'align-middle text-center';
            tr.appendChild(td);

            tBody.appendChild(tr);

            tr = document.createElement("tr");

            td = document.createElement("td");
            td.colSpan =colSpanData;
            td.innerHTML = "<b>COSTO ENVIO:</b>";
            td.className = 'align-middle text-end';
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = "$"+ parseFloat(pedido.ENVIO).toFixed(2);;
            td.className = 'align-middle text-center';
            tr.appendChild(td);

            tBody.appendChild(tr);

            tr = document.createElement("tr");

            td = document.createElement("td");
            td.colSpan =colSpanData;
            td.innerHTML = "<b>TOTAL:</b>";
            td.className = 'align-middle text-end';
            tr.appendChild(td);

            td = document.createElement("td");
             td.innerText = "$"+(parseFloat(pedido.MONTO) + parseFloat(pedido.ENVIO)).toFixed(2);
            td.className = 'align-middle text-center';
            tr.appendChild(td);

            tBody.appendChild(tr);

            tr = document.createElement("tr");

            td = document.createElement("td");
            td.colSpan =colSpanData;
            td.innerHTML = "<b>RESTO:</b>";
            td.className = 'align-middle text-end';
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = "$"+((parseFloat(pedido.MONTO) + parseFloat(pedido.ENVIO))-parseFloat(sumaPagos)).toFixed(2);
            td.className = 'align-middle text-center';
            tr.appendChild(td);

            tBody.appendChild(tr);

    }else{
        let tBody = document.getElementById('tableProductos');
        tBody.innerText ='';
        document.getElementById('tableInfoProductos').classList.add('d-none');
        document.getElementById('infoPago').classList.add('d-none');
    }


    
}

function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("modalProductos").style.display = "block"
    document.getElementById("modalProductos").classList.add("show");

    getSabores()
    .then(async (responseSabor)=>{
        if(await responseSabor.success){
            let values = responseSabor.data;
            document.getElementById('saborProducto').innerText ="";
            for(i=0; i < values.length; i++){
                let option = document.createElement("option");
                option.value = values[i].ID;
                option.text = values[i].DESCRIPCION;
                document.getElementById('saborProducto').add(option);
            }
        }
    });
    getRellenos()
    .then(async (responseSabor)=>{
        if(await responseSabor.success){
            let values = responseSabor.data;
            document.getElementById('rellenoProducto').innerText ="";
            for(i=0; i < values.length; i++){
                let option = document.createElement("option");
                option.value = values[i].ID;
                option.text = values[i].DESCRIPCION;
                document.getElementById('rellenoProducto').add(option);
            }
        }
    });
    getTamanos()
    .then(async (responseSabor)=>{
        if(await responseSabor.success){
            let values = responseSabor.data;
            document.getElementById('tamanoProducto').innerText ="";
            for(i=0; i < values.length; i++){
                let option = document.createElement("option");
                option.value = values[i].ID;
                option.text = values[i].DESCRIPCION;
                document.getElementById('tamanoProducto').add(option);
            }
        }
    });
    getCoberturas()
    .then(async (responseSabor)=>{
        if(await responseSabor.success){
            let values = responseSabor.data;
            document.getElementById('coberturaProducto').innerText ="";
            for(i=0; i < values.length; i++){
                let option = document.createElement("option");
                option.value = values[i].ID;
                option.text = values[i].DESCRIPCION;
                document.getElementById('coberturaProducto').add(option);
            }
        }
    });

}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("modalProductos").style.display = "none"
    document.getElementById("modalProductos").classList.remove("show")
    /* check list products */

}
// Get the modal
 var modal = document.getElementById('modalProductos');
 
// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
} 

function actualizarCostosPedido(){
    let idPedido = localStorage.getItem('idPedido');
    let envio = document.getElementById('envioProducto').value;
    let costo = document.getElementById('costoProducto').value;
    actualizarCostos(idPedido,envio,costo)
    .then(async (responseCostos)=>{
        if(await responseCostos.success){
            Swal.fire('Costos modificados', '', 'success')
            .then( ()=>{
                fillData();
            });
        }
    });
}


function agregarProductoPedido(){
    let idPedido = localStorage.getItem('idPedido');
    let cantidadProducto = document.getElementById('cantidadProducto');
    let saborProducto = document.getElementById('saborProducto');
    let rellenoProducto = document.getElementById('rellenoProducto');
    let tamanoProducto = document.getElementById('tamanoProducto');
    let coberturaProducto = document.getElementById('coberturaProducto');
    let especificacionesProducto = document.getElementById('especificacionesProducto');
    let referenciaProducto = document.getElementById('referenciaProducto');

    if(idPedido != '' && idPedido != null && cantidadProducto.value != '' && saborProducto.value != '' && rellenoProducto.value != '' && tamanoProducto.value != '' && coberturaProducto.value != '' && especificacionesProducto.value != '' && referenciaProducto.value != ''  ){
        addProducto(idPedido,cantidadProducto.value,saborProducto.value,rellenoProducto.value,tamanoProducto.value,coberturaProducto.value,especificacionesProducto.value,referenciaProducto.files[0])
        .then(async(response)=>{
            if( await response.success){
                
                Swal.fire('Producto agregado', '', 'success')
                .then( ()=>{
                    closeModal();
                    cantidadProducto.value = '';
                    saborProducto.value = '';
                    rellenoProducto.value = '';
                    tamanoProducto.value = '';
                    coberturaProducto.value = '';
                    especificacionesProducto.value = '';
                    referenciaProducto.value = '';
                    getProductos(idPedido)
                    .then((response)=>{
                        fillTableProductos(response);
                    });
                     
                    
                });
            }
        });
        
    }else{
        Swal.fire('Complete todos los campos', '', 'warning');
    }


}


function openModalPagos(){
    document.getElementById("backdrop-pagos").style.display = "block"
    document.getElementById("modalPagos").style.display = "block"
    document.getElementById("modalPagos").classList.add("show");
}

function closeModalPagos(){
    document.getElementById("backdrop-pagos").style.display = "none"
    document.getElementById("modalPagos").style.display = "none"
    document.getElementById("modalPagos").classList.remove("show");
}

// Get the modal
var modal = document.getElementById('modalPagos');
 
// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
  if (event.target == modal) {
    closeModalPagos()
  }
} 

function agregarPagoPedido(){
    let idPedido = localStorage.getItem('idPedido');
    let forma = document.getElementById('formaPago').value;
    let monto = document.getElementById('montoPago').value;
    agregarPago(idPedido,forma,monto)
    .then(async (response)=>{
        if(await response.success){
            Swal.fire('Pago añadido', '', 'success')
            .then( ()=>{
                closeModalPagos();
                fillData();
            });
        }
    })
}

function quitarPagoPedido(idpago){
    let idPedido = localStorage.getItem('idPedido');
    removerPago(idpago,idPedido)
    .then(async (response)=>{
        if(await response.success){
            Swal.fire('Pago removido', '', 'success')
            .then( ()=>{
                fillData();
            });
        }
    })
}

function removeProduct(idProducto){
    var data =  new FormData();
    data.append("ID_PRODUCTO", idProducto);
    const pedido = new XMLHttpRequest();
    pedido.addEventListener("readystatechange", async() => {
        if (pedido.readyState === 4 &&  pedido.status === 200) {
            
            if(JSON.parse(pedido.responseText).success){
                Swal.fire('Pedido eliminado correctamente', '', 'success')
                .then(()=>{
                    fillData();
                });
            }
        }
    });
    pedido.open("POST", "/marias/api/productos/remProducto.php");
    pedido.send(data);
}