var button_showCurrentDate = document.getElementById("show_data_button"),
    output_currentDate = document.getElementById("show_data");

button_showCurrentDate.addEventListener("click", function () {
    output_currentDate.innerText = getDate();
})

console.log(getDate());

function getDate() {
    var date = new Date(),
        currentDate = "";

    function checkTwoDigitFormat(number) {
        return number < 10 ? ("0" + String(number)) : number;
    }

    currentDate = checkTwoDigitFormat(date.getDate()) +
        "." + checkTwoDigitFormat(date.getMonth() + 1) +
        "." + date.getFullYear();

    return currentDate;
}