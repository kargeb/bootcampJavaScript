console.log("lotek");

const inputNewNumber = document.getElementById("inputNewNumber"),
      buttonNewNumber = document.getElementById("buttonNewNumber"),
      gotNumbers = document.getElementById("gotNumbers");


let newNumbers = [];



buttonNewNumber.addEventListener("click", function(){

    inserNewNumber();
    console.log(newNumbers);

})



function inserNewNumber(){
    
    if(newNumbers.length == 6){
        buttonNewNumber.disabled = true;
        inputNewNumber.placeholder = "Podałeś wszystkie 6 liczb";
        return false;
    }
    
    if( !inputNewNumber.value){
        inputNewNumber.placeholder = "Podaj liczbę!";
        return false;
    }
    
    let number = Number(inputNewNumber.value);

    if( newNumbers.includes(number) ){

        inputNewNumber.placeholder = "Już podałeś taką liczbę!";
        inputNewNumber.value = "";
        return false;
    }
    
    if(Number.isInteger(number) && number > 0 && number < 49 ){
        
        newNumbers.push(number);
        gotNumbers.innerText = newNumbers.join(", ");
        
    } else {
        inputNewNumber.placeholder = "LIczba musi być CAŁKOWITA, większa od 0 i w zakresie 1-49";
    }
    
    inputNewNumber.value = "";
    inputNewNumber.focus();
}


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