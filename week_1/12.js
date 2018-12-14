var movies = {
    "Dla dzieci": [
        "Kubuś Puchatek i Przyjaciele",
        "Zwariowane Melodie",
        "Piotruś Pan"
    ],
    "Dla młodzieży": [
        "Szkoła uczuć",
        "Podróż za jeden uśmiech",
        "Szatan z 7-ej klasy"
    ],
    "Dla dorosłych": [
        "Gwiezdne Wojny",
        "Szklana Pułapka",
        "Titanic"
    ]
};

var output_solution = document.getElementById("solution"),
    solutionText = "";

for (var category in movies) {

    console.log(category + ":");
    solutionText += category + ": <br>";

    for (var i = 0; i < movies[category].length; i++) {

        console.log(movies[category][i]);
        solutionText += movies[category][i] + "<br>";
    }

    console.log("=====================\n\n");
    solutionText += "=====================<br>";
}

output_solution.innerHTML = solutionText;