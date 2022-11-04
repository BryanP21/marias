function openModal() {
    let listEmpleados = document.getElementById('listEmpleados');
    let listClientes = document.getElementById('listClientes');
    let fechaEntrega = document.getElementById('fechaEntrega');
if(fechaEntrega.value != '' && fechaEntrega.value != null && listClientes.value != '' && listEmpleados.value != '' && listClientes.value != null && listEmpleados.value != null){

    document.getElementById("backdrop").style.display = "block"
    document.getElementById("modalProductos").style.display = "block"
    document.getElementById("modalProductos").classList.add("show")
    

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
}else{
    Swal.fire('Complete todos los campos', '', 'warning');
}
    
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
window.onload = function(e){ 
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    let listEmpleados = document.getElementById('listEmpleados');
    let listClientes = document.getElementById('listClientes');
    let fechaEntrega = document.getElementById('fechaEntrega');

    let todayIs = `${ye}-${mo}-${da}`;
    getEmpleados()
    .then(async (responseEmpleados)=>{
        if( await responseEmpleados.success){
            localStorage.setItem('empleados',JSON.stringify(responseEmpleados.data));
            let empleados = responseEmpleados.data;
            getClientes()
            .then(async (responseClientes)=>{
                if(await responseClientes.success){
                    localStorage.setItem('clientes',JSON.stringify(responseClientes.data));
                }
                let clientes = responseClientes.data;
                
                for(i=0; i < empleados.length; i++){
                    let option = document.createElement("option");
                    option.value = empleados[i].ID;
                    option.text = empleados[i].NOMBRE;
                    listEmpleados.add(option);
                }
                for(i=0; i < clientes.length; i++){
                    let option = document.createElement("option");
                    option.value = clientes[i].ID;
                    option.text = clientes[i].NOMBRE;
                    listClientes.add(option);
                }
            });
        }
    });

  
    fechaEntrega.addEventListener('change',()=>{
        if(fechaEntrega.value != ''  && fechaEntrega.value != null  && listClientes.value != '' && listEmpleados != '' && listClientes.value != null && listEmpleados != null){
           agregarPedido();
        }
    });
    
    listEmpleados.addEventListener('change', ()=>{
        if(fechaEntrega.value != ''  && fechaEntrega.value != null  && listClientes.value != '' && listEmpleados != '' && listClientes.value != null && listEmpleados != null){
            agregarPedido();
        }

    });

    listClientes.addEventListener('change', ()=>{
        if(fechaEntrega.value != ''  && fechaEntrega.value != null  && listClientes.value != '' && listEmpleados != '' && listClientes.value != null && listEmpleados != null){
            agregarPedido();
        }

        if(listClientes.value != ""){
            document.getElementById('infoCliente').classList.remove('d-none');
            let calle = document.getElementById('clienteCalle');
            let ciudad = document.getElementById('clienteCiudad');
            let codigo = document.getElementById('clienteCodigoPostal');
            let numero = document.getElementById('clienteNumeroExterior');
            let colonia = document.getElementById('clienteColonia');
            let estado = document.getElementById('clienteEstado');
            let descripcion = document.getElementById('clienteDescripcion');
            let clientes = JSON.parse(localStorage.getItem('clientes'));
            for(i=0;i<clientes.length; i++){
               if(clientes[i].ID == listClientes.value){
                    calle.value = clientes[i].CALLE;
                    ciudad.value = clientes[i].CIUDAD;
                    codigo.value = clientes[i].CODIGO_POSTAL;
                    numero.value = clientes[i].NUMERO_EXTERIOR;
                    colonia.value = clientes[i].COLONIA;
                    estado.value = clientes[i].ESTADO;
                    descripcion.value = clientes[i].DESCRIPCION;
               }
            }
    }else{
        document.getElementById('infoCliente').classList.add('d-none');
    }
        
    });

    function agregarPedido(){
        var data =  new FormData();
        data.append("ID_EMPLEADO", listEmpleados.value);
        data.append("FECHA_REGISTRO",todayIs);
        data.append("FECHA_ENTREGA", fechaEntrega.value);
        data.append("ID_CLIENTE", listClientes.value);
        const pedido = new XMLHttpRequest();
        pedido.addEventListener("readystatechange", async() => {
            if (pedido.readyState === 4 &&  pedido.status === 201) {
                let result = JSON.parse(pedido.responseText);
                localStorage.setItem('idPedido',result.data);
            }
        });
        pedido.open("POST", "/marias/api/pedidos/addpedido.php");
        pedido.send(data);
    }




    let costoPedido = document.getElementById('costoPedido');
    let costoEnvio = document.getElementById('costoEnvio');
    let anticipo = document.getElementById('anticipo');
    let costoTotal = document.getElementById('costoTotal');
    let restante = document.getElementById('restante');
    let pagado = document.getElementById('pagado');

    document.getElementById('costoPedido').addEventListener('keyup',()=>{
        if(costoPedido.value != '' && costoEnvio.value != ''){
            costoTotal.value = "$"+(parseFloat(costoPedido.value) + parseFloat(costoEnvio.value)).toFixed(2);
        }else{
            costoTotal.value = '';
        }
    });

    document.getElementById('costoEnvio').addEventListener('keyup',()=>{
        if(costoPedido.value != '' && costoEnvio.value != ''){
            costoTotal.value = "$"+(parseFloat(costoPedido.value) + parseFloat(costoEnvio.value)).toFixed(2);
        }else{
            costoTotal.value = '';
        }
    });
    document.getElementById('anticipo').addEventListener('keyup',()=>{
       if(costoTotal.value != '' && anticipo.value != ''){
                restante.value = "$"+(parseFloat(costoTotal.value.replace('$','')) - parseFloat(anticipo.value)).toFixed(2);
            if(parseFloat(anticipo.value.replace('$','')) < parseFloat(costoTotal.value.replace('$',''))){
                pagado.value = 'No';
            }else{
                pagado.value = 'Si';
            }
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
        .then((response)=>{
            if(response.success){
                
                Swal.fire('Producto agregado', '', 'success')
                .then(async ()=>{
                    closeModal();
                    cantidadProducto.value = '';
                    saborProducto.value = '';
                    rellenoProducto.value = '';
                    tamanoProducto.value = '';
                    coberturaProducto.value = '';
                    especificacionesProducto.value = '';
                    referenciaProducto.value = '';
                    await fillTableProductos(idPedido);
                    
                });
            }
        });
        
    }else{
        Swal.fire('Complete todos los campos', '', 'warning');
    }


}
function completePedidoPago(){
    let idPedido = localStorage.getItem('idPedido');
    let nPagos = document.getElementById('nPagos');
    let costoPedido = document.getElementById('costoPedido');
    let costoEnvio = document.getElementById('costoEnvio');
    let anticipo = document.getElementById('anticipo');
    let costoTotal = document.getElementById('costoTotal');
    let restante = document.getElementById('restante');
    let metodoPago = document.getElementById('metodoPago');
    let pagado = document.getElementById('pagado');


            var data =  new FormData();
            data.append("ID_PEDIDO", idPedido);
            data.append("MONTO", costoPedido.value);
            data.append("ENVIO",costoEnvio.value);
            data.append("ANTICIPO", anticipo.value);
            data.append("PAGADO", pagado.value);
            data.append("FORMA_PAGO", metodoPago.value);

            const pedido = new XMLHttpRequest();
            pedido.addEventListener("readystatechange", async() => {
                console.log(pedido.responseText);
                if (pedido.readyState === 4 &&  pedido.status === 200) {
                    if(JSON.parse(pedido.responseText).success){
                        Swal.fire('Pedido agregado correctamente', '', 'success')
                        .then(()=>{
                            window.location.assign('pedidos.php')
                        });
                    }
                }
            });
            pedido.open("POST", "/marias/api/pedidos/completePedido.php");
            pedido.send(data);
        




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
                    let idPedido = localStorage.getItem('idPedido');
                    fillTableProductos(idPedido);
                });
            }
        }
    });
    pedido.open("POST", "/marias/api/productos/remProducto.php");
    pedido.send(data);
}


function fillTableProductos(idPedido){
    getProductos(idPedido)
    .then((responseData)=>{
        
        if(responseData.success){
              document.getElementById('tableInfoProductos').classList.remove('d-none');
              document.getElementById('infoPago').classList.remove('d-none');
              let tBody = document.getElementById('tableProductos');
              tBody.innerText ='';
              for(i=0;i<responseData.data.length;i++){
                  let tr = document.createElement("tr");
  
                  let td = document.createElement("td");
                  td.innerText = i+1;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].CANTIDAD;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].ESPECIFICACIONES;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].SABOR;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].RELLENO;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].TAMANO;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerText = responseData.data[i].COBERTURA;
                  td.className = 'align-middle';
                  tr.appendChild(td);
  
                  td = document.createElement("td");
                  td.innerHTML = "<img src='/marias/api"+responseData.data[i].IMG+"'  width='100' >";
                  td.className = 'align-middle ';
                  tr.appendChild(td);
  
                  
                  td = document.createElement("td");
                  td.innerHTML = '<i class="bi bi-dash-circle-fill text-center" id="'+responseData.data[i].ID+'" onclick="removeProduct('+responseData.data[i].ID+')" ></i>';
                  td.className = 'align-middle';
                  tr.appendChild(td);
                  
                  tBody.appendChild(tr);
              }
        }else{
            let tBody = document.getElementById('tableProductos');
            tBody.innerText ='';
            document.getElementById('tableInfoProductos').classList.add('d-none');
            document.getElementById('infoPago').classList.add('d-none');
        }
    });
}