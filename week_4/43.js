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

    
        console.log(tab);

        

        button_input.on("click", function(){

            show_the_list();

            
        })
        
        input.on("keypress", function(e){
            
            if(e.key == "Enter"){
                show_the_list();
            }

        })
        
        function show_the_list(){
            
            if( input.val() ){
    
                list.children().remove();
    
                // console.log(tab);
    
                input.attr("placeholder", "Wprowadź tekst" );
    
                
                tab.unshift( input.val() );
    
                for(var i=0; i<tab.length; i++){
    
                    var temp = $(" <li class= \"list-group-item h"+ (i+1) +"\">" + tab[i] + "</li>");
    
                    if(i==0){
                        temp.css("display","none");
                        list.append( temp.fadeIn("slow") );
                        
                    } else if( i == 4 ){
                        list.append(temp);
                        list.children().last().fadeOut("slow");
                        tab.length = tab.length-1;
                    } else {
                        list.append(temp);
                    }
                }
    
                input.val("");
            } else {
                input.attr("placeholder", "WPISZ WARTOŚĆ!!!");
            }
        }
        
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