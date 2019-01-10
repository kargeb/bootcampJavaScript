(function ($) {
    $(document).ready(function () {

        var buttons = $(".selector_buttons button");

        $(buttons[0]).on("click", function () {
            var divs = $("div.grid.grid-12");

            $(this).toggleClass("task41_bg_button_first");
            $(divs).toggleClass("task41_bg_button_first");

        })

        $(buttons[1]).on("click", function () {
            var links = $(".nav a[href^='http']");

            $(this).toggleClass("task41_bg_button_third");
            $(links).toggleClass("task41_bg_button_third");
        })

        $(buttons[2]).on("click", function () {
            var unchecked = $("input:radio:not(:checked), input:checkbox:not(:checked)");

            $(this).toggleClass("task41_bg_button_second");
            if ($(this).hasClass("task41_bg_button_second")) {
                $("input:radio, input:checkbox").prop('disabled', true);
            } else {
                $("input:radio, input:checkbox").prop('disabled', false);
            }
            $(unchecked).parent().toggleClass("task41_bg_button_second");
        })

        $(buttons[3]).on("click", function () {
            var paragraphs = $("div#text p:empty").first();

            $(this).toggleClass("task41_bg_button_fourth");
            $(paragraphs).toggleClass("task41_bg_button_fourth");
        })

        $(buttons[4]).on("click", function () {
            var paginations = $(".pagination-item:not(span)");

            $(this).toggleClass("task41_bg_button_fifth");
            $(paginations).toggleClass("task41_bg_button_fifth");
        })
    });
})(jQuery);
