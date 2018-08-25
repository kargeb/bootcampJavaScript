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

var p = document.querySelector("p");
var pokaConsole = "",
    pokaSite = "";

for(var key in movies) {
    pokaConsole += key + ": \n";
    
    for(var i=0; i<movies[key].length; i++) {
        pokaConsole += movies[key][i] + "\n"
    }
    pokaConsole += "=================\n";
}

 console.log(pokaConsole);

for(var key in movies) {
    pokaSite += key + ": <br>";
    
    for(var i=0; i<movies[key].length; i++) {
        pokaSite += movies[key][i] + "<br>"
    }
    pokaSite += "=================<br>";
}


p.innerHTML = pokaSite;