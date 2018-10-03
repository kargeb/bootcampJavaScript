(function($){

$(document).ready(function(){

    console.log("jquery");
    console.log($);

    var buttons = $(".line_break_buttons button");
    // var sample = $(".nav > a[href^='http']");
    // var sample = $(".nav a[href^='http']");
    var sample = $(".pagination-item:not(span)");

    console.log(sample);

    // console.log(sample.toggleClass("task41_bg_button_first") );

    $(buttons[0]).on("click", function(){

        // $(this).toggleClass("task41_bg_button_first");
        var divs = $("div.grid.grid-12");

        $(this).toggleClass("task41_bg_button_first");

        $(divs).toggleClass("task41_bg_button_first");

    })

    $(buttons[1]).on("click", function(){
        
        var links = $(".nav a[href^='http']");

        $(this).toggleClass("task41_bg_button_second");

        $(links).toggleClass("task41_bg_button_second");


    })

    $(buttons[2]).on("click", function(){

        var unchecked = $("input:radio:not(:checked), input:checkbox:not(:checked)");

        $(this).toggleClass("task41_bg_button_third");

        $(unchecked).parent().toggleClass("task41_bg_button_third");

    })

    $(buttons[3]).on("click", function(){

        var paragraphs = $("div#text p:empty");

        $(this).toggleClass("task41_bg_button_fourth");

        $(paragraphs).toggleClass("task41_bg_button_fourth");

    })

    $(buttons[4]).on("click", function(){

        var paginations = $(".pagination-item:not(span)");

        $(this).toggleClass("task41_bg_button_fifth");

        $(paginations).toggleClass("task41_bg_button_fifth");

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
