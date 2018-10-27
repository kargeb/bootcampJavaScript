let buttons = document.getElementById("buttons"),
    tasks = document.getElementById("tasks").children;


hideAll();

// if( window.location.href[window.location.href.length-1] == "l" ) {
//     console.log("index");

// } else {
//     console.log( window.location.href[window.location.href.length-1]);

//     tasks[window.location.href[window.location.href.length-1]-1].classList.remove("hidden");
//     lastOne = tasks[window.location.href[window.location.href.length-1]];
// }


buttons.addEventListener("click", function(e){

    if(e.target.id) {

       hideAll();

        tasks[e.target.id].classList.remove("hidden");
    }
})

function hideAll(){
    for ( i=0; i<tasks.length; i++ ){
        tasks[i].classList.add("hidden");
    }
}