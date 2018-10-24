console.log("weakMap");
console.log("tak wlasnie");

buttonGetData = document.getElementById("buttonGetData"),
ulPoka = document.getElementById("poka"),
url = "http://code.eduweb.pl/bootcamp/json/",
liWeakMap = new WeakMap();

 
function getJSON( url, fn_success, fn_failure ){
    
    
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


function good(data){
    console.log("Beje");
    console.log(  data.length );

    let docFrag = document.createDocumentFragment();

    data.forEach( (element, i) => {
        console.log(element.name);
        console.log(i);

        let li = document.createElement("li");

        liWeakMap.set(li, element);

        li.innerText = element.name;

        docFrag.appendChild(li);

    });

    ulPoka.appendChild(docFrag);



}

function bad(message){
    console.log("zle");
    console.log(message);
}

buttonGetData.addEventListener("click", function(){

    getJSON(url, good, bad);

});

