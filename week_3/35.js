console.log("35");

var button_add_page = document.getElementById("button_add_page"),
    button_goToURL = document.getElementById("button_goToURL"),
    button_check = document.getElementById("button_check"),
    input = document.querySelector("input[type='text']"),
    buttons_container = document.getElementById("buttons_container"),
    result = document.querySelector("div[role='alert']");
    
var regex = /\/35\.html\?page=\d+$/;

var input_url ="";

input.value = window.location.href;


/* button_add_page.addEventListener("click", function(){

    window.location.href = "35.html?page=2";

}); */

console.log(input);
console.log(buttons_container);


function getPage(){

    if ( regex.test( window.location.href  ) ){

        result.innerText = "jest";

        // var page_number = 

        return /\d*$/.exec( window.location.href )[0];

    } else {
        result.innerText = "nie ma";
    }
}

button_goToURL.addEventListener("click", function(){

    // console.log( window.location.href + input_url );    
    let temp = input_url;
    input.value = "";

    window.location.href += temp; 

    // console.log( getPage() );

});

button_check.addEventListener("click", function(){

    getPage();

})

buttons_container.addEventListener("click", function(e){

    console.log(input.innerText);

    if ( e.target.className !== "col" ){
        console.log(e.target.innerText);

        input.value += e.target.innerText;

        input_url = input.value;

    }

    console.log(input.value);



        // console.log("nie wypisuj nicz");
    // console.log(e);

})


