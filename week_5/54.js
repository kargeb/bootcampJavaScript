class Lotek {

    constructor(){
        this.max = 49;
        this.numberOfDrownNumbers = 6;
        this.drownNumbers = this.getNumbers(this.max, this.numberOfDrownNumbers);
    }

    getNumbers(max, numberOfDrownNumbers) {
        let tempDrownNumbers = [];

        while (tempDrownNumbers.length != numberOfDrownNumbers) {
            let randomNumber =  Math.floor( Math.random() * max ) + 1;
    
            if( ! tempDrownNumbers.includes(  randomNumber ) ) {
                tempDrownNumbers.push( randomNumber );
            } 
        }
        return tempDrownNumbers;
    }

    checkNumbers(userNumbers) {

        let match = [];

        for(let i=0; i<userNumbers.length; i++){
            if( this.drownNumbers.includes( userNumbers[i] ) )
            match.push( userNumbers[i] );
        }

        return { numbers : match,
                 count : match.length };
    }

    *[Symbol.iterator](){
        yield *this.drownNumbers;
    }
}

const inputNewNumber = document.getElementById("inputNewNumber"),
      buttonNewNumber = document.getElementById("buttonNewNumber"),
      buttonRandomNumbers = document.getElementById("buttonRandomNumbers"),
      gotNumbers = document.getElementById("gotNumbers"),
      showDrawNumbers = document.getElementById("showDrawNumbers"),
      buttonDraw = document.getElementById("buttonDraw"),
      output_result = document.getElementById("output_result");

let newNumbers = [],
    greatLotek;

buttonNewNumber.addEventListener("click", function(){
    inserNewNumber();
})

buttonRandomNumbers.addEventListener("click", function(){
    newNumbers = drawSix(49).sort( function(a, b) { return a - b } );
    gotNumbers.innerText = newNumbers.join(", ");
})

buttonDraw.addEventListener("click", function(){
    greatLotek = new Lotek();

    showDrawNumbers.innerText = greatLotek.drownNumbers.sort( function(a, b) { return a - b } ).join(", ");
    let {numbers, count} = greatLotek.checkNumbers( newNumbers );
    output_result.innerText = "Liczba trafionych liczb: " + count + " \nOto numery: " + numbers;
})

inputNewNumber.addEventListener("keypress",function(e){
    if(newNumbers.length == 6){
        buttonNewNumber.disabled = true;
        inputNewNumber.placeholder = "Podałeś wszystkie 6 liczb";
        inputNewNumber.value = "";
        return false;
    }

    if( e.key == "Enter" ){
        inserNewNumber();
    }
})

function inserNewNumber(){
    if( !inputNewNumber.value){
        inputNewNumber.placeholder = "Podaj liczbę!";
        return false;
    }
    
    let number = Number(inputNewNumber.value);
    
    inputNewNumber.value = "";
    inputNewNumber.placeholder = "";
    
    if( newNumbers.includes(number) ){
        inputNewNumber.placeholder = "Już podałeś taką liczbę!";
        inputNewNumber.value = "";
        return false;
    }
    
    if(Number.isInteger(number) && number > 0 && number < 49 ){
        newNumbers.push(number);
        gotNumbers.innerText = newNumbers.join(", ");
        
        if(newNumbers.length == 6){
            buttonNewNumber.disabled = true;
            inputNewNumber.placeholder = "Podałeś wszystkie 6 liczb";
            return false;
        }
    } else {
        inputNewNumber.placeholder = "LIczba musi być CAŁKOWITA, większa od 0 i w zakresie 1-49";
    }
    
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
        }
    }
    return drownNumbers;
}