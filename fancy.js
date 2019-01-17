let mainHeader = document.getElementById("mainHeader"),
    headerHeader = document.getElementById("headerHeader"),
    buttonSection = document.getElementById("buttonSection"),
    ul = document.querySelector("ul"),
    liList = document.querySelectorAll("li");

let buttonsList = buttonSection.querySelectorAll("button"),
    listHasSlidedIn = false;

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


listSlideOut(100, "translateX(-200%)");


buttonsList[0].addEventListener("click", function(){

    if(listHasSlidedIn){
        listAnimationScale(70, false, 0);
    } else {
        firstButtonClick(0)
    }
})

buttonsList[1].addEventListener("click", function(){

    if(listHasSlidedIn){
        listAnimationScale(70, false, 1);
    } else {
        firstButtonClick(1)
    }
})


buttonsList[2].addEventListener("click", function(){

    if(listHasSlidedIn){
        listAnimationScale(70, false, 2);
    } else {
        firstButtonClick(2)
    }
    

})


buttonsList[3].addEventListener("click", function(){

    if(listHasSlidedIn){
        listAnimationScale(70, false, 3);
    } else {
        firstButtonClick(3)
    }

})



buttonsList[4].addEventListener("click", function(){

    if(listHasSlidedIn){
        listAnimationScale(70, false, 4);
    } else {
        firstButtonClick(4)
    }


    
})
buttonsList[5].addEventListener("click", function(){
    
    if(listHasSlidedIn){
        listAnimationScale(70, false, 5);
    } else {
        firstButtonClick(5)
    }

})

function firstButtonClick(week){
    listHasSlidedIn = true;
    ul.classList.remove("invisible");

    mainHeader.style.fontSize = "1px";
    mainHeader.style.opacity = 0;

    setTimeout(function(){
         headerHeader.style.opacity = 0.9;
         headerHeader.style.fontSize = "28px";
         listSlideIn(100, week);
     },100);
}


headerHeader.addEventListener("click", function(){

    listHasSlidedIn = false;
    listSlideOut(100, "translateX(-200%)");
    headerHeader.style.opacity = "";
    headerHeader.style.fontSize = "";

    setTimeout(function(){
        mainHeader.style.fontSize = "";
        mainHeader.style.opacity = "";
    },500);
})


function listAnimationScale(interval, sameTime, week){

    if(sameTime){

        liList.forEach(function(elem, i){
            elem.style.transform = "scaleY(0.1)";
        });

        setTimeout(function(){
            liList.forEach(function(elem, i){
                elem.style.transform = "";
                elem.innerText = tasksArray[week][i];
            });
        },interval);

    } else {
        liList[0].style.transform = "scaleY(0.1)";

        setTimeout(function(){
            liList[1].style.transform = "scaleY(0.1)";
        },interval);

        setTimeout(function(){
            liList[2].style.transform = "scaleY(0.1)";
            liList[0].style.transform = "";
            liList[0].innerText = tasksArray[week][0];
        },2 * interval);

        setTimeout(function(){
            liList[3].style.transform = "scaleY(0.1)";
            liList[1].style.transform = "";
            liList[1].innerText = tasksArray[week][1];
        },3 * interval);

        setTimeout(function(){
            liList[4].style.transform = "scaleY(0.1)";
            liList[2].style.transform = "";
            liList[2].innerText = tasksArray[week][2];
        },4 * interval);

        setTimeout(function(){
            liList[3].style.transform = "";
            liList[3].innerText = tasksArray[week][3];
        },5 * interval);

        setTimeout(function(){
            liList[4].style.transform = "";
            liList[4].innerText = tasksArray[week][4];
        },6 * interval);
    }
}


function listSlideOutAndIn(interval, type){
    liList[0].style.transform = type;

    setTimeout(function(){
        liList[1].style.transform = type;
    },1 * interval);

    setTimeout(function(){
        liList[2].style.transform = type;
        liList[0].style.transform = "";
    },2 * interval);

    setTimeout(function(){
        liList[3].style.transform = type;
        liList[1].style.transform = "";
    },3 * interval);

    setTimeout(function(){
        liList[4].style.transform = type;
        liList[2].style.transform = "";
    },4 * interval);

    setTimeout(function(){
        liList[3].style.transform = "";
    },5 * interval);

    setTimeout(function(){
        liList[4].style.transform = "";
    },6 * interval);
}

function listSlideIn(interval, week){

    liList[0].innerText = tasksArray[week][0];
    liList[1].innerText = tasksArray[week][1];
    liList[2].innerText = tasksArray[week][2];
    liList[3].innerText = tasksArray[week][3];
    liList[4].innerText = tasksArray[week][4];

    liList[0].style.transform = "";

    setTimeout(function(){
        liList[1].style.transform = "";
    },1 * interval);

    setTimeout(function(){
        liList[2].style.transform = "";
    },2 * interval);

    setTimeout(function(){
        liList[3].style.transform = "";
    },3 * interval);

    setTimeout(function(){
        liList[4].style.transform = "";
    },4 * interval);
}

function listSlideOut(interval, type){
    liList[0].style.transform = type;

    setTimeout(function(){
        liList[1].style.transform = type;
    },1 * interval);

    setTimeout(function(){
        liList[2].style.transform = type;
    },2 * interval);

    setTimeout(function(){
        liList[3].style.transform = type;
    },3 * interval);

    setTimeout(function(){
        liList[4].style.transform = type;
    },4 * interval);
}