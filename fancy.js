let mainHeader = document.getElementById("mainHeader"),
    headerHeader = document.getElementById("headerHeader"),
    buttonSection = document.getElementById("buttonSection"),
    liList = document.querySelectorAll("li");

let buttonsList = buttonSection.querySelectorAll("button");   

let tasksArray = [
                [
                    "Zadanie 1 - Instrukcje warunkowe",
                    "Zadanie 2 - Pętle",
                    "Zadanie 3 - Funkcja konwertująca wartość na typ Boolean",
                    "Zadanie 4 - Funkcja sumująca przekazane liczby",
                    "Zadanie 5 - Funkcja zwracająca sformatowaną datę"
                ],
                [
                    "Zadanie 1 - Pokazywanie ukrytego elementu",
                    "Zadanie 2 - Walidator formularza",
                    "Zadanie 3 - Odliczanie od 10 do 0",
                    "Zadanie 4 - Dziedziczenie z klasy EventEmitter",
                    "Zadanie 5 - Funkcja debounce"
                ],
                [
                    "Zadanie 1 - Polyﬁll metody repeat dla String",
                    "Zadanie 2 - Wrapper Toggler dla elementów z drzewa DOM ",
                    "Zadanie 3 - Ajaxowy polyﬁll dla funkcji fetch ",
                    "Zadanie 4 - Funkcja getJSON",
                    "Zadanie 5 - Parser adresu URL"
                ],
                [
                    "Zadanie 1 - Selektory w jQuery",
                    "Zadanie 2 - Pokazywanie elementów i animacje",
                    "Zadanie 3 - Dynamiczne tworzenie elementów",
                    "Zadanie 4 - Praca z Ajax i JSON",
                    "Zadanie 5 - Własny plugin dla spisu treści"
                ],
                [
                    "Zadanie 1 - Dekompozycja obiektu z danych JSON",
                    "Zadanie 2 - Funkcja tagująca do formatowania cen",
                    "Zadanie 3 - Przepisanie konstruktorówz ES5 na klasy w ES6",
                    "Zadanie 4 - Iterator dla klasy losującej liczby",
                    "Zadanie 5 - Preloader obrazów z użyciem Promise"
                ],
                [
                    "Zadanie 1 - Wiązanie elementów DOM z danymi z użyciem WeakMap",
                    "Zadanie 2 - Polyﬁll dla metody Array.from",
                    "Zadanie 3 - Praca z modułami ES6",
                    "Zadanie 4 - Funkcja asynchroniczna dla ładowania obrazów ",
                    "Zadanie 5 - Bundlowanie modułów z webpack i praca z Babel   "
                ]
            ];



console.log(buttonsList);

console.log(liList);
console.log(liList[0]);
console.log(mainHeader);
console.log(headerHeader);

buttonsList[0].addEventListener("click", function(){
    listAnimationTranslate();
})

buttonsList[1].addEventListener("click", function(){
    liList[0].style.transform = "scaleY(0.1)";

    setTimeout(function(){
        liList[0].style.transform = "";
        liList[0].innerText = "Jakis nowy tekst dodany panie";
        liList[0].style.borderColor = "white";
    },200);
})

buttonsList[2].addEventListener("click", function(){
    listAnimationScale(200, true, 3);
})




buttonSection.addEventListener("click", function(e){

    console.log(e);

    mainHeader.style.fontSize = "1px";
    mainHeader.style.opacity = 0;

    setTimeout(function(){
        headerHeader.style.opacity = 0.9;
        headerHeader.style.fontSize = "28px";
    },100);
});

headerHeader.addEventListener("click", function(){
    headerHeader.style.opacity = "";
    headerHeader.style.fontSize = "";

    setTimeout(function(){
        mainHeader.style.fontSize = "";
        mainHeader.style.opacity = "";
    },100);
})


function listAnimationScale(interval, sameTime, week){

    if(sameTime){

        liList.forEach(function(elem, i){
            elem.style.transform = "scaleY(0.1)";
            // elem.innerText = tasksArray[week][i];
        });

        setTimeout(function(){
            liList.forEach(function(elem, i){
                elem.style.transform = "";
                elem.innerText = tasksArray[week][i];
            });
        },interval);

        // liList[0].style.transform = "scaleY(0.1)";
        // liList[0].innerText = tasksArray[week][0];

        // liList[1].style.transform = "scaleY(0.1)";
        // liList[2].style.transform = "scaleY(0.1)";
        // liList[3].style.transform = "scaleY(0.1)";
        // liList[4].style.transform = "scaleY(0.1)";

        // setTimeout(function(){
        //     liList[0].style.transform = "";
        //     liList[1].style.transform = "";
        //     liList[2].style.transform = "";
        //     liList[3].style.transform = "";
        //     liList[4].style.transform = "";
        // },interval);
    } else {
        liList[0].style.transform = "scaleY(0.1)";

        setTimeout(function(){
            liList[1].style.transform = "scaleY(0.1)";
        },interval);

        setTimeout(function(){
            liList[2].style.transform = "scaleY(0.1)";
            liList[0].style.transform = "";
        },2 * interval);

        setTimeout(function(){
            liList[3].style.transform = "scaleY(0.1)";
            liList[1].style.transform = "";
            // liList[0].style.transform = "";
        },3 * interval);

        setTimeout(function(){
            liList[4].style.transform = "scaleY(0.1)";
            liList[2].style.transform = "";
        },4 * interval);

        setTimeout(function(){
            liList[3].style.transform = "";
        },5 * interval);

        setTimeout(function(){
            liList[4].style.transform = "";
        },6 * interval);
    }
}


function listAnimationTranslate(){
    liList[0].style.transform = "translateX(-200%)";

    setTimeout(function(){
        liList[1].style.transform = "translateX(-200%)";
    },100);

    setTimeout(function(){
        liList[2].style.transform = "translateX(-200%)";
        liList[0].style.transform = "";
    },200);

    setTimeout(function(){
        liList[3].style.transform = "translateX(-200%)";
        liList[1].style.transform = "";
        // liList[0].style.transform = "";
    },300);

    setTimeout(function(){
        liList[4].style.transform = "translateX(-200%)";
        liList[2].style.transform = "";
    },400);

    setTimeout(function(){
        liList[3].style.transform = "";
    },500);

    setTimeout(function(){
        liList[4].style.transform = "";
    },600);
}