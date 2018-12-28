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

let button = document.querySelector("button"),
    showContent = document.getElementById("showContent"),
    address = "http://code.eduweb.pl/bootcamp/users/",
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

button.addEventListener("click", function(){

    fecz(address, good, bad);

});