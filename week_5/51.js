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