let mainHeader = document.getElementById("mainHeader"),
    headerHeader = document.getElementById("headerHeader"),
    buttonSection = document.getElementById("buttonSection");

console.log(mainHeader);
console.log(headerHeader);

buttonSection.addEventListener("click", function(){

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