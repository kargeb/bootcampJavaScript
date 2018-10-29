(function() {

    var start_button = document.getElementById("start");
        // showtime = document.getElementById("showtime");
        

    function debounce(fn, time) {

        var time = time,
            check = 0;
            // clear;
            

        return function() {

            check++;
            // showtime.max++;

            

            
            var clear = setTimeout(function(){

                if (check > 1){
                    clearTimeout(clear);
                    console.log(clear);
                    clear--;
                    check --;
                    // showtime.value++;
                } else {
                    fn();
                    check = 0;
                    console.log(clear);
                    // clear = null;
                    // showtime.value = showtime.max;
                }

            }, time);

        };
    }

    var test = debounce( function(){
        console.log("z debance");
    }, 5000);


    start_button.addEventListener("click", test);


    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 200);

    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja

    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);

    window.addEventListener("resize", handleResize, false);

    // console.log(showtime.value);
    // console.log(showtime.max);

})();