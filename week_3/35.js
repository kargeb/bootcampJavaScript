console.log("35");

var 
// button_add_page = document.getElementById("button_add_page"),
    button_goToURL = document.getElementById("button_goToURL"),
    // button_check = document.getElementById("button_check"),
    input_url = document.getElementById("input_url"),
    summary = document.getElementById("summary");
    outputGetPage = document.getElementById("outputGetPage");
    
var regex = /\/35\.html\?page=\d+$/;

var input_url ="?page=2";

console.log(outputGetPage);

console.log(window.location.href);
console.log(window.location.pathname);

console.log(input_url);

getPage();

showSummary();

function getPage(){

    console.log("jestem");

    console.log( window.location.href);

    if ( regex.test( window.location.href  ) ){


        console.log("jest teb zndhd");
        outputGetPage.innerText = /\d*$/.exec( window.location.href )[0];


         return  Number( outputGetPage.innerText );

    } else {
        console.log("nie ma");
        outputGetPage.innerText = "null";
        return null;
    }
}

button_goToURL.addEventListener("click", function(){
    
    let temp = input_url.value;

    console.log(temp);

    window.location.href = window.location.pathname + temp;

});

function showSummary(){

    summary.innerText = "adress " + window.location.href + " \n cos tam cos tam ze wyrazeniem: \n /\\/35\\.html\\?page=\\d+$/";

}