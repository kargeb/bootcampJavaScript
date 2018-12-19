(function () {

    var output_countdown = document.getElementById("output_countdown"),
        button_start = document.getElementById("button_start");

    var i = 10;

    function startCountdown(callback) {

        if (i >= 0) {
            output_countdown.innerText = i--;
            setTimeout(startCountdown.bind(null, callback), 200);
        } else {
            callback();
            i = 10;
            button_start.disabled = false;
        }
    }

    function passingFunction() {
        console.log("Odliczanie zakończone!");
        output_countdown.innerText = "Odliczanie zakończone!";
    }

    button_start.addEventListener("click", function () {
        button_start.disabled = true;
        console.log("start");
        startCountdown(passingFunction);
    })

})();