console.log("lotek");

const inputNewNumber = document.getElementById("inputNewNumber"),
      buttonNewNumber = document.getElementById("buttonNewNumber"); 


let newNumbers = [];



buttonNewNumber.addEventListener("click", function(){

    // console.log( inputNewNumber.value );

    inputNewNumber.value ? newNumbers.push( inputNewNumber.value ) : inputNewNumber.placeholder = "Podaj liczbę!";

    inputNewNumber.value = "";

    console.log(newNumbers);

})

function draw(max){
    
    return Math.floor( Math.random() * max ) + 1; 
    
}

function drawSix(max){
    
    let drownNumbers = [];

    while (drownNumbers.length != 6) {


        let randomNumber = draw(max);

        if( ! drownNumbers.includes(  randomNumber ) ) {


            drownNumbers.push( randomNumber );

        } else {
            console.log("powtórzyła sie: " + randomNumber);
        }

    }

    return drownNumbers;

}

function greatLotek() {

    console.log( drawSix(49).sort( function(a, b) { return a - b } ) );



}

greatLotek();