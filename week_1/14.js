var button_add = document.getElementById("add"),
    input = document.querySelector("input"),
    show_numbers = document.getElementById("show_numbers"),
    show_sum = document.getElementById("show_sum"),
    button_add_up = document.getElementById("add_up_button");

var numbers_to_show = "",
    numbers = [];

    input.focus();

    button_add.addEventListener("click", function(e){

        e.preventDefault();

        if(input.value) {
    
            numbers.push( parseInt(input.value)  )

            numbers_to_show ? ( numbers_to_show += ", " + String(input.value) ) : (  numbers_to_show += String(input.value) );
    
            input.value = "";
            input.focus();
    
            show_numbers.innerText = numbers_to_show;

            input.placeholder = "";
        } else {
            input.placeholder = "PODAJ LICZBĘ!";
        }
    })

    button_add_up.addEventListener("click", function(){

        show_sum.innerText = sum(numbers);
    })


function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}    