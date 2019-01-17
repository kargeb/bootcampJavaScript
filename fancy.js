let mainHeader = document.getElementById("mainHeader"),
    headerHeader = document.getElementById("headerHeader"),
    buttonSection = document.getElementById("buttonSection"),
    liList = document.querySelectorAll("li");

let buttonsList = buttonSection.querySelectorAll("button");   

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
    listAnimationScale(80);
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


function listAnimationScale(interval){
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