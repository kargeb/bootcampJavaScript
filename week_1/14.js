var button_nextNumber = document.getElementById("add"),
    input_nextNumber = document.getElementById("inputNumbers"),
    output_allNumbers = document.getElementById("show_numbers"),
    output_sum = document.getElementById("show_sum"),
    button_addAllNumbers = document.getElementById("add_up_button"),
    button_reset = document.getElementById("reset_button");

var currentNumber = "",
    arrayInputtedNumbers = [];

input_nextNumber.focus();

button_nextNumber.addEventListener("click", function (e) {
    e.preventDefault();
    if (input_nextNumber.value) {
        arrayInputtedNumbers.push(parseFloat(input_nextNumber.value))
        currentNumber ? (currentNumber += " + " + String(input_nextNumber.value)) : (currentNumber += String(input_nextNumber.value));
        input_nextNumber.value = "";
        input_nextNumber.focus();
        output_allNumbers.innerText = currentNumber;
        input_nextNumber.placeholder = "";
    } else {
        input_nextNumber.placeholder = "PODAJ LICZBĘ!";
        input_nextNumber.focus();
    }
})

button_addAllNumbers.addEventListener("click", function () {
    output_sum.innerText = sum(arrayInputtedNumbers);
    input_nextNumber.value = "";
    input_nextNumber.focus();
})

button_reset.addEventListener("click", function (e) {
    e.preventDefault();
    arrayInputtedNumbers = [];
    currentNumber = "";
    input_nextNumber.placeholder = "";
    output_allNumbers.innerText = "_";
    input_nextNumber.value = "";
    input_nextNumber.focus();
    output_sum.innerText = "_";
})

input_nextNumber.addEventListener("keypress", function (e) {
    if (e.key == " ") {
        output_sum.innerText = sum(arrayInputtedNumbers);
        input_nextNumber.value = "";
        input_nextNumber.focus();
    }
})

function sum(arrayNumbers) {
    var sum = 0;
    for (var i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i];
    }
    return sum;
}