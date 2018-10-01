console.log("fecz");

var button = document.querySelector("button");
var alert = document.querySelector("div[role='alert']");
var address = "http://code.eduweb.pl/bootcamp/users/";
console.log(button);
console.log(alert);

if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");


    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);



        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);


        
        xhr.onreadystatechange = function(e){

            
            
            if( this.readyState == 4 && this.status == 200 ) {
                
                console.log( "JEST GIT");
                
                console.log(this);

                console.log( this.status );

                
                console.log( this.readyState );
                
                console.log(e.type);

                console.log(xhr.response);

                good();


                
            } else if ( this.readyState == 4 && this.status != 200 ) {
                
                
                console.log( "zjebalo sie" );

                // console.log( e.type );
                // console.log(e);
            
                // console.log( )

                // console.log(e);
                console.log(this);

                xhr.onerror = function(e){
                    console.log(" dupa dupa dupa");
                    console.log(e);

                    bad();

                }

            }
            
        }


        xhr.send(null);
       
    } 
    
} else {
    console.log("nie ma fecz nie ma nie ma nicz");
}



function good(){
    console.log("Great");
    alert.classList.add("alert-success");
    alert.innerText = "Great";
}

function bad(){
    console.log("Fucked up");
    alert.classList.add("alert-danger");
    alert.innerText = "Fucked up";
}

button.addEventListener("click", function(){

    fecz(address);

});