(function($){
    $(document).ready(function(){
    
    var button_input = $("#button-addon2"),
        input = $("input")
        list = $("#task43_list"),
        tab = [];

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
                input.attr("placeholder", "WPISZ TEKST!!!");
            }
        }
    });
})(jQuery);