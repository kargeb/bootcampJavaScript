(function() {

    var button_buttonBar = document.getElementById("button_buttonBar"),
        buttonBar = document.getElementById("buttonBar"),
        // button_scrollBar = document.getElementById("button_scrollBar"),
        scrollBar = document.getElementById("scrollBar"),
        // button_resizeBar = document.getElementById("button_resizeBar"),
        resizeBar = document.getElementById("resizeBar");

        
    function debounce(fn, time) {

        // let time = time,
        let clear = null;

        return function() {

            clearTimeout(clear);
            
            clear = setTimeout(function(){
                fn();
            }, time);
        };
    }

    function debounceWithBar(fn, time, bar) {

        let clear = null,
            clearInt = null,
            interval = time/10,
            counter = 0;

            console.log(interval);

        return function() {

            counter = 0;
            bar.value = counter;
            clearTimeout(clear);
            clearInterval(clearInt);
            
            clearInt = setInterval(() => {
                console.log("counter = " + counter);
                counter++;
                bar.value = counter;
                if(counter == 10){
                    clearInterval(clearInt);
                    counter = 0;
                    bar.value = counter;
                }
            }, interval);

            clear = setTimeout(function(){
                fn();
            }, time);
        };
    }

    var test = debounceWithBar( function(){
        console.log("z debance");
    }, 1000, buttonBar);


    button_buttonBar.addEventListener("click", test);


    var handleScroll = debounceWithBar(function() {
        console.log("Scrollujemy!");
    }, 600, scrollBar);

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

})();