(function(){

    var timer = document.getElementById("timer"),
    count_button = document.getElementById("count_button");

timer.innerText = "";

count_button.addEventListener("click",function(){

    console.log("duoasasd");
    counter(callback);

})

function callback(){
    console.log("Działa! z Callbacka");
}

var i = 10;

function counter(fun){

    
    
    fun();

    if( i>=0 ) {
        timer.innerText = i--;
        setTimeout( counter.bind(this, fun), 1000);
        
    } else {
        console.log("koniec");
        timer.innerText = "KONIEC";
    }
}

})();


