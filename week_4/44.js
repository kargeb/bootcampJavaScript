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

                // for( var key in dataJSON){
                //     console.log( "key [" + key + "] = " + dataJSON[key].name);
                // }

                $(dataJSON).each(function(i, elem){

                    console.log( elem );

                    ul.append("<li>" + elem.name + ", " + elem.username + ", " + elem.email + ", " + elem.phone + "</li>");

                })

            });
        })

        function showTable(JSONobject){

            // var trThead = 
            console.log("globalna funkcja");

            var headTable = $("<table>", {
                "class" : "table table-hover"
            }).append("<thead><tr>");

            headTable.find("tr").append("<th>#</th>")
                                .append("<th>Name</th>")
                                .append("<th>Username</th>")
                                .append("<th>Email</th>")
                                .append("<th>Phone</th>");

            var bodyTable =$("<tbody>").append("<tr>").append("<th>duap daupd</th>");                    

            headTable.find("thead").after(bodyTable);

            headTable.insertBefore(downloadButton);



        }

        showTable();

    });
    
})(jQuery);