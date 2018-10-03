(function($){

$(document).ready(function(){

    console.log("jquery");
    console.log($);

    var sample = $("div.grid.grid-12");

    var boxes = $(":checkbox:checked");

    console.log(boxes.parent());

    console.log(sample);


    function show(elems){

        elems.each( function(){

            $(this).css("background-color", "#dc3545");
    
        });

    }

    sample.css("background-color", "#dc3545");
    boxes.parent().css("background-color", "#dc3545");

    // show(sample);


});

})(jQuery);
