function getClientes(){
    let clientes = new Promise(function(myResolve, myReject) {
        try{
            const client = new XMLHttpRequest();
            client.addEventListener("readystatechange", async() => {
                if (client.readyState === 4 &&  client.status === 200) {
                    myResolve(JSON.parse(client.responseText));
                }  
            });
            client.open("GET", "/marias/api/clientes/getClientes.php");
            client.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return clientes;
}

function indexCliente(idcliente){
    let clientes = new Promise(function(myResolve, myReject) {
        try{
            const client = new XMLHttpRequest();
            client.addEventListener("readystatechange", async() => {
                if (client.readyState === 4 &&  client.status === 200) {
                    myResolve(JSON.parse(client.responseText));
                }  
            });
            client.open("GET", "/marias/api/clientes/indexcliente.php?idcliente="+idcliente);
            client.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return clientes;
}