// Tutaj stwórz kod całego pluginu

(function($, window, document, undefined){

    $.fn.toc = function(){

        var sections = $("section");

        var containerToc = $("<div>", {
            "class" : "toc"
        }).append("<h2>Spis treści</h2>")
            .append("<ul>");

        sections.first().before(containerToc);

        return this.each(function(i){

            $(this).attr("id", i);

            var li = $("<li>");
            var a = $("<a>", {
                href : "#" + i,
                text : (i+1) + ". " + $(this).find("h2").text()
            });

            li.append(a);
            containerToc.find("ul").append(li);
            })
        };

})(jQuery, window, document);