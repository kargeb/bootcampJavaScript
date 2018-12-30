let buttonsMenu = document.getElementById("buttonsMenu"),
    tasks = document.getElementById("tasks").children,
    previousPageId = window.location.href[window.location.href.length-1];


hideAll();

// if( window.location.href[window.location.href.length-1] == "l" ) {
//     console.log("index");

// } else {
//     console.log( window.location.href[window.location.href.length-1]);

//     tasks[window.location.href[window.location.href.length-1]-1].classList.remove("hidden");
//     lastOne = tasks[window.location.href[window.location.href.length-1]];
// }

if( previousPageId >=0 && previousPageId <=5) {
    tasks[previousPageId].classList.remove("hidden");
}


buttonsMenu.addEventListener("click", function(e){

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