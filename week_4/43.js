(function($){

    $(document).ready(function(){
    
    var button_input = $("#button-addon2"),
        input = $("input")
        list = $("#task43_list"),
        // items = $(list.children()),
        // tab = new Array(list.children().length);
        tab = [];
        
        console.log(button_input);
        console.log(list.children());
        console.log(list.children().length);
        console.log(tab);
        console.log(input);

        console.log(input.attr("placeholder")) ; 

      /*   button_input.on("click", function(){

            if( input.val() ) {

                input.attr("placeholder", "Wprowadź tekst" );

                //  var temp = "<p>" + input
                console.log( input.val() );
    
                // poka.prepend("<p>" + input.val() + "</p>");   
                var temp = "<li class=\"list-group-item\" >" + input.val() + "</li>";
                    temp = $(temp).css("display", "none");
    
                list.prepend(temp.fadeIn());

                // temp.fadeIn();
    
                input.val("");
            } else {

                input.attr("placeholder", "WPISZ WARTOŚĆ!!!");

            }
        }) */

        // for(var i=0; i<tab.length; i++){
        //     tab[i] = i*i;
        //     console.log( "dla i=" + i + " tab[i] = " + tab[i] );
        // }

        console.log(tab);

        // console.log(items.first());
        
        button_input.on("click", function(){


            if( input.val() ){

                list.children().remove();

                // console.log(tab);

                input.attr("placeholder", "Wprowadź tekst" );

                
                tab.push( input.val() );

                for(var i=0; i<tab.length; i++){

                    list.prepend(" <li class= \"list-group-item h1\">" + tab[i] + "</li>");

                }


                
                input.val("");
            } else {
                input.attr("placeholder", "WPISZ WARTOŚĆ!!!");
            }
            
            console.log(tab);
            
        })
        
    });
    
})(jQuery);

/*           
          console.log(items);
          items.first().css("display", "none");
          items.last().css("display", "block")
          
          items.each( function(i, elem){
              
              console.log(" dla indexu " + i + " wartoasc w item yo " + $(elem).text());
              
              // $(elem).text(tab[i]);
              $(elem).text(tab[i]);
              
          } )
          
          items.first().fadeIn("slow");
          items.last().fadeOut("slow");
          tab.length = tab.length-1;
          console.log(tab); 
          */