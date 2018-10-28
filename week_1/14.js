var button_add = document.getElementById("add"),
    inputNumbers = document.getElementById("inputNumbers"),
    show_numbers = document.getElementById("show_numbers"),
    show_sum = document.getElementById("show_sum"),
    button_add_up = document.getElementById("add_up_button"),
    reset_button = document.getElementById("reset_button");

var numbers_to_show = "",
    numbers = [];

    inputNumbers.focus();

    button_add.addEventListener("click", function(e){

        e.preventDefault();

        if(inputNumbers.value) {
    
            numbers.push( parseFloat(inputNumbers.value)  )

            numbers_to_show ? ( numbers_to_show += " + " + String(inputNumbers.value) ) : (  numbers_to_show += String(inputNumbers.value) );
    
            inputNumbers.value = "";
            inputNumbers.focus();
    
            show_numbers.innerText = numbers_to_show;

            inputNumbers.placeholder = "";
        } else {
            inputNumbers.placeholder = "PODAJ LICZBĘ!";
        }
    })

    button_add_up.addEventListener("click", function(){

        show_sum.innerText = sum(numbers);
    })

    reset_button.addEventListener("click", function(e){
        e.preventDefault();
        numbers = [];
        numbers_to_show = "";
        inputNumbers.placeholder = "";
        show_numbers.innerText = "";
        inputNumbers.value = "";
        inputNumbers.focus();
        show_sum.innerText = "";


    })


function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}    