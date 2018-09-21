console.log("fecz");

if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");

    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "http://code.eduweb.pl/bootcamp/users/", false);



        xhr.send(null);


        console.dir(xhr);
        console.dir(xhr);

        console.log(xhr.response);

    } 

} else {
    console.log("nie ma fecz nie ma nie ma nicz");
}

fecz("adres");