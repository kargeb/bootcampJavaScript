(function() {

    var button_buttonBar = document.getElementById("button_buttonBar"),
        buttonBar = document.getElementById("buttonBar"),
        scrollBar = document.getElementById("scrollBar"),
        resizeBar = document.getElementById("resizeBar"),
        output_buttonBar = document.getElementById("output_buttonBar"),
        output_scrollBar = document.getElementById("output_scrollBar"),
        output_resizeBar = document.getElementById("output_resizeBar");

        
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

    function debounceWithBar(fn, time, bar, output) {

        let clear = null,
            clearInt = null,
            interval = time/10,
            counter = 0;

            console.log(interval);
            
        return function() {
                
            output.classList.add("hidden");
            counter = 0;
            bar.value = counter;
            clearTimeout(clear);
            clearInterval(clearInt);
            
            clearInt = setInterval(() => {
                console.log("counter = " + counter);
                counter++;
                bar.value = counter;
                if(counter == 10){
                    bar.value = counter;
                    clearInterval(clearInt);
                    counter = 0;
                    bar.value = counter;
                    output.classList.remove("hidden");
                }
            }, interval);

            clear = setTimeout(function(){
                fn();
            }, time);
        };
    }

    var test = debounceWithBar( function(){
        console.log("z debance");
    }, 1000, buttonBar, output_buttonBar);


    button_buttonBar.addEventListener("click", test);


    var handleScroll = debounceWithBar(function() {
        console.log("Scrollujemy!");
    }, 600, scrollBar, output_scrollBar);

    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja

    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounceWithBar(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100, resizeBar, output_resizeBar);

    window.addEventListener("resize", handleResize, false);

})();