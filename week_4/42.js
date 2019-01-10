(function($){
$(document).ready(function(){

    var icon = $(".menu_icon"),
        rozwiazanie = $("#rozwiazanie"),
        bottom = $("#bottom"),
        mainNav = $(".mainNav");

    icon.on("click", function(){
        mainNav.slideToggle();
        rozwiazanie.slideToggle();
        bottom.slideToggle();
    })
});
})(jQuery);
