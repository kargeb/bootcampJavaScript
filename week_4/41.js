(function($){

$(document).ready(function(){

    console.log("jquery");
    console.log($);

    var buttons = $(".line_break_buttons button");
    var sample = $("div.grid.grid-12");

    var boxes = $(":checkbox:checked");

    console.log($(buttons));

    // $(buttons[0]).css("background-color", "#dc3545");

    console.log(boxes.parent());

    console.log(sample);

    $(buttons[0]).on("click", function(){

        $(this).toggleClass("task41_bg_button_first");

    })

    $(buttons[1]).on("click", function(){

        $(this).toggleClass("task41_bg_button_second");

    })

    $(buttons[2]).on("click", function(){

        $(this).toggleClass("task41_bg_button_third");

    })

    $(buttons[3]).on("click", function(){

        $(this).toggleClass("task41_bg_button_fourth");

    })

    $(buttons[4]).on("click", function(){

        $(this).toggleClass("task41_bg_button_fifth");

    })


    // function show(elems){

    //     elems.each( function(){

    //         $(this).css("background-color", "#dc3545");
    
    //     });

    // }

    // sample.css("background-color", "#dc3545");
    // boxes.parent().css("background-color", "#dc3545");





    // show(sample);


});

})(jQuery);
