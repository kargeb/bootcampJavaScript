var button_toggleElement = document.getElementById("button_toggleElement"),
    toggleElement = document.getElementById("toggleElement");

button_toggleElement.addEventListener("click", function () {
    toggleElement.classList.toggle("hidden");

    toggleElement.classList.contains("hidden") ?
        button_toggleElement.innerText = "Pokaż element" :
        button_toggleElement.innerText = "Ukryj element";
});