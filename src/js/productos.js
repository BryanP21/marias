function getProductos(idPedido){
    let productos = new Promise(function(myResolve, myReject) {
        try{
            const producto = new XMLHttpRequest();
            producto.addEventListener("readystatechange", async() => {
                if (producto.readyState === 4 &&  producto.status === 200) {
                    myResolve(JSON.parse(producto.responseText));
                }  
            });
            producto.open("GET", "/marias/api/productos/getProductos.php?idpedido="+idPedido);
            producto.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return productos;
}


function addProducto(id_pedido,cantidad,id_sabor,id_relleno,id_tamaño,id_cobertura,especificaciones,referencia){
     if(id_pedido != '' && cantidad != ''&& id_sabor != ''&& id_relleno != ''&& id_tamaño != ''&& id_cobertura != ''&& especificaciones != ''&& referencia != ''){
        let producto = new Promise(function(myResolve, myReject) {
            try{

                var data =  new FormData();
                data.append("ID_PEDIDO", id_pedido);
                data.append("CANTIDAD", cantidad);
                data.append("ID_SABOR",id_sabor);
                data.append("ID_RELLENO", id_relleno);
                data.append("ID_TAMANO", id_tamaño);
                data.append("ID_COBERTURA",id_cobertura);
                data.append("ESPECIFICACIONES", especificaciones);
                data.append("imagen", referencia);

                const pedido = new XMLHttpRequest();
                pedido.addEventListener("readystatechange", async() => {
                    if (pedido.readyState === 4 &&  pedido.status === 201) {
                        console.log(pedido.responseText);
                        myResolve(JSON.parse(pedido.responseText));
                    }else{
                        console.log(pedido.responseText);
                    }
                });
                pedido.open("POST", "/marias/api/productos/addProducto.php");
                pedido.send(data);

              }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return producto;
     }
}