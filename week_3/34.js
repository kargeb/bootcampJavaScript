function getJSON(url, fn_success, fn_failure) {

    let message = "Wystąpił błąd!";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "application/json");

    connectionCheckerList.children[0].classList.remove("hidden");
    connectionCheckerList.children[0].innerText = "Połączenie ustanownione";

    xhr.onreadystatechange = function (e) {

        if (this.readyState == 4 && this.status == 200) {
            connectionCheckerList.children[1].classList.remove("hidden");
            connectionCheckerList.children[1].innerText = "Status połączenia: " + this.status;

            let data = JSON.parse(xhr.response);

            fn_success(data);

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

    getJSON("http://code.eduweb.pl/bootcamp/users/",
        function (data) {
            connectionChecker.classList.add("alert-success");
            labelSuccess.classList.remove("hidden");
            showContent.innerText = writeContent(data);
            console.log(data);
        }, function (err) {
            connectionChecker.classList.add("alert-danger");
            labelError.classList.remove("hidden");
            showContent.innerHTML = err;
            console.log(err);
        });
});

function writeContent(obj) {
    let content = "";
    for (var person in obj) {
        for (var personData in obj[person]) {
            content += obj[person][personData] + " | ";
        }
        content += "\n";
    }
    return content;
};

buttonBad.addEventListener("click", function () {
    resetConnectionChecker();
    connectionChecker.classList.remove("hidden");
    getJSON(addressBad, fn_success, fn_error);
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