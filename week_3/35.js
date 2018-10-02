console.log("35");

var button_add_page = document.getElementById("button_add_page"),
    button_goToURL = document.getElementById("button_goToURL"),
    button_check = document.getElementById("button_check"),
    input = document.querySelector("input[type='text']"),
    // buttons_container = document.getElementById("buttons_container"),
    // button_clear = document.getElementById("button_clear"),
    result = document.querySelector("h1[class='display-4']");
    
var regex = /\/35\.html\?page=\d+$/;

var input_url ="";

console.log(result);

// result. = "chuj";

// console.log(resul)


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
    let temp = input_url;
    // input.value = "";

    window.location.href += temp; 

    getPage();

    // console.log( getPage() );

});

button_check.addEventListener("click", function(){



    getPage();

})

// button_clear.addEventListener("click", function(){

//     input.value = "?";
//     window.location.href = "35.html";
    

// })

// buttons_container.addEventListener("click", function(e){

//     console.log(input.innerText);

//     if ( e.target.className !== "col" ){
//         console.log(e.target.innerText);

//         input.value += e.target.innerText;

//         input_url = input.value;

//     }

//     console.log(input.value);



//         // console.log("nie wypisuj nicz");
//     // console.log(e);

// })


