console.log("task 51");

if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");
    
    
    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);
        
        
        let mesage = "Error !";
        
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", url, true);
        
        xhr.setRequestHeader("Accept", "application/json");
        
        
        xhr.onreadystatechange = function(e){
            
            
            
            if( this.readyState == 4 && this.status == 200 ) {
                
                let data = JSON.parse(xhr.response);


                
                fn_success(data);
                
                
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

let downloadButton = document.getElementById("downloadButton"),
    alert = document.querySelector("div[role='alert']"),
    poka = document.getElementById("poka"),
    address = "http://code.eduweb.pl/bootcamp/json/",
    mapLink = "http://bing.com/maps/default.aspx?cp=";  // http://bing.com/maps/default.aspx?cp=LAT~LON

function good(data){
    alert.classList.add("alert-success");
    alert.innerText = "Success";
    console.log(data[0]);

    for( let elem in data ){

        console.log(data[elem]);

        let { name, username, email, website, address : { geo : [first, second] }, company : { name : companyName } } = data[elem];
        
        console.log(name, username, email, website, first, second, companyName);
        
        let templatePerson =    ` <p>
                                Imię: ${name} <br>
                                Nick: ${username} <br>
                                Email: <a href="${email}">${email}</a> <br>
                                Strona internetowa: <a href="${website}">${website}</a> <br>
                                Nazwa firmy: ${companyName} <br>
                                Mapa:  <a href="${createMap(first, second)}">klick</a>
                                </p>
                                <hr>` 
        
        poka.innerHTML += templatePerson;                        
    }

}

function bad(message){
    alert.classList.add("alert-danger");
    alert.innerText = message;
    console.log(message);
}

function createMap(LAT, LON){

    return mapLink + LAT + "~" + LON;

}

downloadButton.addEventListener("click", function(){

    fecz(address, good, bad);

});