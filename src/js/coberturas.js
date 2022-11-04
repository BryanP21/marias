function getCoberturas(){
    let coberturas = new Promise(function(myResolve, myReject) {
        try{
            const datacoberturas = new XMLHttpRequest();
            datacoberturas.addEventListener("readystatechange", async() => {
                if (datacoberturas.readyState === 4 &&  datacoberturas.status === 200) {
                    myResolve(JSON.parse(datacoberturas.responseText));
                }  
            });
            datacoberturas.open("GET", "/marias/api/coberturas/getCoberturas.php");
            datacoberturas.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return coberturas;
}