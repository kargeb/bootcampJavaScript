console.log("tydzien II");

var button_1 = document.getElementById("show_button_1"),
    div_1 = document.getElementById("hidden_div_1"),
    button_2 = document.getElementById("show_button_2"),
    div_2 = document.getElementById("hidden_div_2");

// console.log(button);

button_1.addEventListener("click", function(){

    button_1.innerText == "Pokaż treść" ? button_1.innerText = "Ukryj treść" : button_1.innerText = "Pokaż treść";

    div_1.classList.toggle("hidden");
    div_1.classList.toggle("d-inline-block");
}),

button_2.addEventListener("click", function(){

    button_2.innerText == "Pokaż treść" ? button_2.innerText = "Ukryj treść" : button_2.innerText = "Pokaż treść";

    div_2.classList.toggle("invisible");
    // div_2.classList.toggle("d-inline-block");
})

