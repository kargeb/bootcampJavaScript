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

var p = document.getElementById("content");
var text = "";


console.log(movies);

for( let category in movies ){

    console.log(category + ":");
    text += category + ": <br>";

    for (let i=0; i<movies[category].length; i++){

        console.log(movies[category][i]);
        text += movies[category][i] + "<br>";
    }

    console.log("=====================\n\n");
    text += "=====================<br><br>";
}

p.innerHTML = text;
