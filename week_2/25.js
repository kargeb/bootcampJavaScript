(function() {

    var button_buttonBar = document.getElementById("button_buttonBar"),
        buttonBar = document.getElementById("buttonBar"),
        scrollBar = document.getElementById("scrollBar"),
        resizeBar = document.getElementById("resizeBar"),
        output_buttonBar = document.getElementById("output_buttonBar"),
        output_scrollBar = document.getElementById("output_scrollBar"),
        output_resizeBar = document.getElementById("output_resizeBar");

        
    function debounce(fn, time) {

        let clear = null;

        return function() {

            clearTimeout(clear);
            
            clear = setTimeout(function(){
                fn();
            }, time);
        };
    }

    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 600);

    window.addEventListener("scroll", handleScroll, false);

    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);

    window.addEventListener("resize", handleResize, false);    



    function debounceWithBar(fn, time, bar, output) {

        let clear = null,
            clearInt = null,
            interval = time/10,
            counter = 0;
            
        return function() {
                
            output.classList.add("hidden");
            counter = 0;
            bar.value = counter;
            clearTimeout(clear);
            clearInterval(clearInt);
            
            clearInt = setInterval(() => {
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

    var handleButton = debounceWithBar( function(){
    }, 1000, buttonBar, output_buttonBar);

    button_buttonBar.addEventListener("click", handleButton);

    var handleScrollBar = debounceWithBar(function() {
    }, 600, scrollBar, output_scrollBar);

    window.addEventListener("scroll", handleScrollBar, false);

    var handleResizeBar = debounceWithBar(function() {
    }, 100, resizeBar, output_resizeBar);

    window.addEventListener("resize", handleResizeBar, false);

})();