var show_data_button = document.getElementById("show_data_button");
var show_data = document.getElementById("show_data");

var data = new Date();

function format(data){

    return data < 10 ? "0" + String(data) : data;
}

show_data_button.addEventListener("click", function(){
    show_data.innerText = format( data.getDay()) + "." + format( data.getMonth()+1 ) + "." + data.getFullYear()
})

console.log(  format( data.getDay() ), format( data.getMonth()+1 ), data.getFullYear());