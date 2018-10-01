console.log("fecz");

if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");


    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);



        var xhr = new XMLHttpRequest();

        xhr.open("GET", "http://code.eduweb.pl/bootcamppp/users/", true);


        
        xhr.onreadystatechange = function(e){
            
            // console.log( this.status );
            
            // console.log( this.readyState );
            
            // console.log(xhr.response)
            
            // console.log(xhr);
            
            
            if( this.readyState == 2 ) {
                console.log("naglowki");
                console.log(this.status);
            }

            if( this.readyState == 4 ) {

                if( this.status == 200 ) {
                    console.log("beje");
                } else {
                    console.log("dupa piessss dupa");
                    console.log(this.status);
                }

            }
            
            
            
            if( this.readyState == 4 && this.status == 200 ) {
                
                console.log( "JEST GIT");
                
                console.log(this);

                console.log( this.status );

                
                console.log( this.readyState );
                
                console.log(e.type);

                console.log(xhr.response)
                
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

                    console.log(this.status);
                }

                xhr.onloadend = function(e){

                    console.log("onloadend");
                    console.log(this);


                }

            }
            
        }


        xhr.send(null);

        console.log("koniec");
             
        
        // console.log(xhr);
        
        // console.log(xhr.response);
        
    } 
    
} else {
    console.log("nie ma fecz nie ma nie ma nicz");
}


fecz("adres");
    