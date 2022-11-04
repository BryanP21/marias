function getSabores(){
    let sabores = new Promise(function(myResolve, myReject) {
        try{
            const datasabores = new XMLHttpRequest();
            datasabores.addEventListener("readystatechange", async() => {
                if (datasabores.readyState === 4 &&  datasabores.status === 200) {
                    myResolve(JSON.parse(datasabores.responseText));
                }  
            });
            datasabores.open("GET", "/marias/api/sabores/getsabores.php");
            datasabores.send();
        }catch(error){
                myReject({
                    success:false,
                    message:error.message
                });
        }
        });
        return sabores;
}