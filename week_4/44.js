(function($){

    $(document).ready(function(){

        var downloadButton = $("#downloadButton"),
            url = "http://code.eduweb.pl/bootcamp/users/",
            dataJSON;

            ul = $('<ul>');
            ul.insertAfter(downloadButton);


        downloadButton.on("click", function(){

            console.log("works");

            $.getJSON(url,function(data){
                
                dataJSON = data;
                console.log(dataJSON);

                for( var key in dataJSON){
                    console.log( "key [" + key + "] = " + dataJSON[key].name);
                }

                $(dataJSON).each(function(i, elem){

                    console.log( elem );

                    ul.append("<li>" + elem.name + "</li>");

                })

            });

            

        })

    });
    
})(jQuery);