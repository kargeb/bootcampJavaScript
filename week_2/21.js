console.log("tydzien II");

var button = document.getElementById("show_button"),
    div = document.getElementById("hidden_div");

console.log(button);

button.addEventListener("click", function(){
    div.classList.toggle("hidden");
})