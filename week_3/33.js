if (typeof fetch == "function") {

    function fecz(url, fn_success, fn_failure) {

        let message = "Wystąpił błąd!";
        let xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        connectionCheckerList.children[0].classList.remove("hidden");
        connectionCheckerList.children[0].innerText = "Połączenie ustanownione";

        xhr.onreadystatechange = function (e) {

            if (this.readyState == 4 && this.status == 200) {
                connectionCheckerList.children[1].classList.remove("hidden");
                connectionCheckerList.children[1].innerText = "Status połączenia: " + this.status;
                fn_success(xhr.response);

            } else if (this.readyState == 4 && this.status != 200) {
                xhr.onerror = function (e) {
                    connectionCheckerList.children[1].classList.remove("hidden");
                    connectionCheckerList.children[1].innerText = "Status połączenia: " + this.status;
                    fn_failure(message);
                }
            }
        }
        xhr.send(null);
    }
}

let addressBad = "http://code.eduweb.pl/bootcamp/usersssssssssss/",
    buttonOk = document.getElementById("buttonOk"),
    buttonBad = document.getElementById("buttonBad"),
    showContent = document.getElementById("showContent"),
    connectionChecker = document.getElementById("connectionChecker"),
    connectionCheckerList = document.querySelector("#connectionChecker ul"),
    labelError = document.getElementById("labelError"),
    labelSuccess = document.getElementById("labelSuccess");


buttonOk.addEventListener("click", function () {

    resetConnectionChecker();
    connectionChecker.classList.remove("hidden");

    fecz("http://code.eduweb.pl/bootcamp/users/",
        function (data) {
            connectionChecker.classList.add("alert-success");
            labelSuccess.classList.remove("hidden");
            showContent.innerHTML = data;
            console.log(data);
        }, function (err) {
            connectionChecker.classList.add("alert-danger");
            labelError.classList.remove("hidden");
            showContent.innerHTML = err;
            console.log(err);
        });
});

buttonBad.addEventListener("click", function () {
    resetConnectionChecker();
    connectionChecker.classList.remove("hidden");
    fecz(addressBad, fn_success, fn_error);
});

function fn_success(content) {
    connectionChecker.classList.add("alert-success");
    labelSuccess.classList.remove("hidden");
    showContent.innerHTML = content;
    console.log(content);
}

function fn_error(message) {
    connectionChecker.classList.add("alert-danger");
    labelError.classList.remove("hidden");
    showContent.innerHTML = message;
    console.log(message);
}

function resetConnectionChecker() {
    labelError.classList.add("hidden");
    labelSuccess.classList.add("hidden");
    connectionChecker.classList.remove("alert-success");
    connectionChecker.classList.remove("alert-danger");
}