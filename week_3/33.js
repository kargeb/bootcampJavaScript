if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");
    
    
    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);
        
        
        let mesage = "Error !";
        
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", url, true);

        console.log("polaczenie utworzone");

        connectionCheckerList.children[0].classList.remove("hidden");
        connectionCheckerList.children[0].innerText = "Połączenie ustanownione";


        
        
        xhr.onreadystatechange = function(e){
            
        
            
            if( this.readyState == 4 && this.status == 200 ) {
                
                
                console.log( this.status );
                connectionCheckerList.children[1].classList.remove("hidden");
                connectionCheckerList.children[1].innerText = "Status połączenia: " + this.status;
                fn_success(xhr.response);
                
                
            } else if ( this.readyState == 4 && this.status != 200 ) {
                
                
                console.log( this.status );
                xhr.onerror = function(e){
                    connectionCheckerList.children[1].classList.remove("hidden");
                    connectionCheckerList.children[1].innerText = "Status połączenia: " + this.status;
                    fn_failure(mesage);
                    
                }
            }
        }
        

        xhr.send(null);
    } 
    
} else {
    console.log("nie ma fetch wiec robimy fetch");
}

let buttonOk = document.getElementById("buttonOk"),
    buttonBad = document.getElementById("buttonBad"),
    showContent = document.getElementById("showContent"),
    addressOk = "http://code.eduweb.pl/bootcamp/users/",
    addressBad = "http://code.eduweb.pl/bootcamp/usersssssssssss/",
    connectionChecker = document.getElementById("connectionChecker"),
    connectionCheckerList = document.querySelector("#connectionChecker ul"),
    labelError = document.getElementById("labelError"),
    labelSuccess = document.getElementById("labelSuccess");


function good(content){
    connectionChecker.classList.add("alert-success");
    labelSuccess.classList.remove("hidden");
    showContent.innerHTML = content;
    console.log(content);
}

function bad(message){
    connectionChecker.classList.add("alert-danger");
    labelError.classList.remove("hidden");
    showContent.innerHTML = message;
    console.log(message);
}

buttonOk.addEventListener("click", function(){

    resetConnectionChecker();
    // fecz(addressOk, good, bad);

    fecz("http://code.eduweb.pl/bootcamp/users/", 
        function(data){
        connectionChecker.classList.add("alert-success");
        labelSuccess.classList.remove("hidden");
        showContent.innerHTML = data;
        console.log(data);
    }, function(err){
        connectionChecker.classList.add("alert-danger");
        labelError.classList.remove("hidden");
        showContent.innerHTML = err;
        console.log(err);
    });

});

buttonBad.addEventListener("click", function(){

    resetConnectionChecker();
    fecz(addressBad, good, bad);

});

function resetConnectionChecker(){
    labelError.classList.add("hidden");
    labelSuccess.classList.add("hidden");
    connectionChecker.classList.remove("alert-success");
    connectionChecker.classList.remove("alert-danger");
}