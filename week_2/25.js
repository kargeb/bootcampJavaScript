(function() {

    var start_button = document.getElementById("start");
        // showtime = document.getElementById("showtime");
        

    function debounce(fn, time) {

        var time = time,
            clear = null;

        return function() {

            clearTimeout(clear);
            
            clear = setTimeout(function(){
                    fn();
            }, time);

        };
    }

    var test = debounce( function(){
        console.log("z debance");
    }, 1000);


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