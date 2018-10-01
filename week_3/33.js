if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");
    
    
    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);
        
        
        let mesage = "Error !";
        
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", url, true);
        
        
        
        xhr.onreadystatechange = function(e){
            
            
            
            if( this.readyState == 4 && this.status == 200 ) {
                
                
                fn_success(xhr.response);
                
                
            } else if ( this.readyState == 4 && this.status != 200 ) {
                
                
                xhr.onerror = function(e){
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
    alert = document.querySelector("div[role='alert']"),
    address = "http://code.eduweb.pl/bootcamp/users/";


function good(content){
    alert.classList.add("alert-success");
    alert.innerText = "Great";
    console.log(content);
}

function bad(message){
    alert.classList.add("alert-danger");
    alert.innerText = message;
    console.log(message);
}

button.addEventListener("click", function(){

    fecz(address, good, bad);

});