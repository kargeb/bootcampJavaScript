var timer = document.getElementById("timer"),
    count_button = document.getElementById("count_button");

timer.innerText = "dupa";

count_button.addEventListener("click",function(){

    console.log("duoasasd");

})

function callback(){
    console.log("Działa! z Callbacka");
}

// callback();

function counter(fun){

    var i = 10;

    // fun();

    var czosz = rek.bind(this, fun);

    function rek(fun) {

        fun();

        console.log("z rek ");

        setTimeout( function call(fun){
            console.log("z cosia i = " + i);

            i--;
            if(i>0){
                rek.bind(this, fun);
            } else {
                fun();
            }

        }, 1000);
    }

    czosz();




}

// counter(callback);