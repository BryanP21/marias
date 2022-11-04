function indexpagos(idpagos){
    let pagos = new Promise(function(myResolve, myReject) {
        try{
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", async() => {
                if (request.readyState === 4 &&  request.status === 200) {
                    console.log("pagosfile",request.responseText);
                    myResolve(JSON.parse(request.responseText));
                }  
            });
            request.open("GET", "/marias/api/pagos/indexPagos.php?idpedido="+idpagos);
            request.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return pagos;
}

function actualizarCostos(idpedido,envio,monto){
    let costo = new Promise(function(myResolve, myReject) {
    var data =  new FormData();
    data.append("ID_PEDIDO",idpedido );
    data.append("ENVIO", envio);
    data.append("MONTO", monto);

    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", async() => {
        if (request.readyState === 4 &&  request.status === 200) {
            let response = JSON.parse(request.responseText);
            if(response.success){
                myResolve({
                    success:true
                });
            }else{
                myReject({
                    success:false
                });
            }
        }  
    });
    request.open("POST", "/marias/api/pagos/editcostos.php");
    request.send(data);
});
return costo;
}

function agregarPago(idpedido,forma,monto){
    let pago = new Promise(function(myResolve, myReject) {
        var data =  new FormData();
        data.append("ID_PEDIDO",idpedido );
        data.append("FORMA_PAGO", forma);
        data.append("MONTO", monto);
    
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", async() => {
            if (request.readyState === 4 &&  request.status === 200) {
                console.log(request.responseText);
                let response = JSON.parse(request.responseText);
                if(response.success){
                    myResolve({
                        success:true
                    });
                }else{
                    myReject({
                        success:false
                    });
                }
            }  
        });
        request.open("POST", "/marias/api/pagos/addpago.php");
        request.send(data);
    });
    return pago;
}



function removerPago(idpago,idpedido){
    let pago = new Promise(function(myResolve, myReject) {
    var data =  new FormData();
    data.append("ID_PEDIDO",idpedido );
    data.append("ID_PAGO",idpago );

    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", async() => {
        if (request.readyState === 4 &&  request.status === 200) {
            console.log(request.responseText);
            let response = JSON.parse(request.responseText);
            if(response.success){
                myResolve({
                    success:true
                });
            }else{
                myReject({
                    success:false
                });
            }
        }  
    });
    request.open("POST", "/marias/api/pagos/delpago.php");
    request.send(data);
});
return pago;
}