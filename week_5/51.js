if( typeof fetch == "function" ){
    console.log("jest fetch wiec robimy fecz");
    
    function fecz( url, fn_success, fn_failure ){
        
        console.log(url);
        
        let mesage = "Error !";
        
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", url, true);
        
        xhr.setRequestHeader("Accept", "application/json");
        
        connectionCheckerList.children[0].classList.remove("hidden");
        connectionCheckerList.children[0].innerText = "Połączenie ustanownione";
        
        xhr.onreadystatechange = function(e){
            
            
            
            if( this.readyState == 4 && this.status == 200 ) {
                
                connectionCheckerList.children[1].classList.remove("hidden");
                connectionCheckerList.children[1].innerText = "Status połączenia: " + this.status;

                let data = JSON.parse(xhr.response);


                
                fn_success(data);
                
                
            } else if ( this.readyState == 4 && this.status != 200 ) {
                
                
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

let downloadButton = document.getElementById("downloadButton"),
    connectionChecker = document.getElementById("connectionChecker"),
    connectionCheckerList = document.querySelector("#connectionChecker ul"),
    connectionCheckerLabelError = document.getElementById("labelError"),
    connectionCheckerLabelSuccess = document.getElementById("labelSuccess");
    poka = document.getElementById("poka"),
    address = "http://code.eduweb.pl/bootcamp/json/",
    mapLink = "http://bing.com/maps/default.aspx?cp=";  // http://bing.com/maps/default.aspx?cp=LAT~LON

function good(data){
    connectionChecker.classList.add("alert-success");
    connectionCheckerLabelSuccess.classList.remove("hidden");
    console.log(data[0]);
    
    let tableBody = "";

    for( let elem in data ){

        console.log(data[elem]);

        let { name, username, email, website, address : { geo : [first, second] }, company : { name : companyName } } = data[elem];
        
        console.log(name, username, email, website, first, second, companyName);

        let templatePerson =`   <tr>
                                    <td>${name}</td>                    
                                    <td>${username}</td>                    
                                    <td><a href="${email}">${email}</a></td>                    
                                    <td><a href="${website}">${website}</a></td>                    
                                    <td>${companyName}</td>                    
                                    <td><a href="${createMap(first, second)}">klick</a></td>
                                </tr>
                                `;                    
        
        console.log("przed tenplate person poka");
        tableBody += templatePerson;                        
    }

    poka.innerHTML = `  <table class="table">
    <thead>
        <tr>
            <th scope="col">Imie</th>
            <th scope="col">Nick</th>
            <th scope="col">Email</th>
            <th scope="col">Strona</th>
            <th scope="col">Firma</th>
            <th scope="col">Mapa</th>
        </tr>
        </thead>
        <tbody> 
            ${tableBody}
        </tbody>
        </table> 
        `;
}

function bad(message){
    connectionChecker.classList.add("alert-danger");
    connectionCheckerLabelError.classList.remove("hidden");
    console.log(message);
}

function createMap(LAT, LON){

    return mapLink + LAT + "~" + LON;

}

downloadButton.addEventListener("click", function(){

    resetConnectionChecker();
    connectionChecker.classList.remove("hidden");
    fecz(address, good, bad);

});

function resetConnectionChecker() {
    connectionCheckerLabelError.classList.add("hidden");
    connectionCheckerLabelSuccess.classList.add("hidden");
    connectionChecker.classList.remove("alert-success");
    connectionChecker.classList.remove("alert-danger");
    connectionCheckerList.children[0].classList.add("hidden");
    connectionCheckerList.children[1].classList.add("hidden");
}