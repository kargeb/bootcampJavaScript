(function($){

$(document).ready(function(){

    console.log("task42");

    var icon = $(".menu_icon"),
        navi = $("#task42_container");

    console.log(icon);
    console.log(navi);

    icon.on("click", function(){

        // $(nav).hide(500);
        // navi.slideToggle();
        navi.slideToggle("fast");

    })

});

})(jQuery);
