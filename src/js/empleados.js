function getEmpleados(){
    let empleados = new Promise(function(myResolve, myReject) {
        try{
            const client = new XMLHttpRequest();
            client.addEventListener("readystatechange", async() => {
                if (client.readyState === 4 &&  client.status === 200) {
                    myResolve(JSON.parse(client.responseText));
                }  
            });
            client.open("GET", "/marias/api/empleados/getEmpleados.php");
            client.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return empleados;
}