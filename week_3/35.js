console.log("35");

var button_add_page = document.getElementById("button_add_page"),
    button_goToURL = document.getElementById("button_goToURL"),
    button_check = document.getElementById("button_check"),
    input = document.getElementById("basic-url"),
    result = document.querySelector("h1[class='display-4']");
    
var regex = /\/35\.html\?page=\d+$/;

var input_url ="?page=2";

console.log(result);

console.log(input);


function getPage(){

    console.log("jestem");

    console.log( window.location.href);

    if ( regex.test( window.location.href  ) ){


        console.log("jest teb zndhd");
        result.innerText = /\d*$/.exec( window.location.href )[0];


         return  Number( result.innerText );

    } else {
        console.log("nie ma");
        result.innerText = "null";
        return null;
    }
}

button_goToURL.addEventListener("click", function(){

    // console.log( window.location.href + input_url );   

    let temp = input.value;

    console.log(temp);
    // input.value = "";

    window.location.href += temp; 

    // getPage();

    // console.log( getPage() );

});

button_check.addEventListener("click", function(){

    getPage();

})

// function goToAddress(url){
//     let xhr = new XMLHttpRequest();

//     xhr.open("GET",url,false);
// }