function getTamanos(){
    let tamanos = new Promise(function(myResolve, myReject) {
        try{
            const datatamanos = new XMLHttpRequest();
            datatamanos.addEventListener("readystatechange", async() => {
                if (datatamanos.readyState === 4 &&  datatamanos.status === 200) {
                    myResolve(JSON.parse(datatamanos.responseText));
                }  
            });
            datatamanos.open("GET", "/marias/api/tamanos/getTamanos.php");
            datatamanos.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return tamanos;
}