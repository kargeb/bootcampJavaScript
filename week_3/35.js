var button_goToURL = document.getElementById("button_goToURL"),
    input_url = document.getElementById("input_url"),
    summary = document.getElementById("summary"),
    outputGetPage = document.getElementById("output_GetPage");

var regex = /\/35\.html\?page=\d+$/;

function getPage() {

    if (regex.test(window.location.href)) {
        return Number(/\d*$/.exec(window.location.href)[0]);

    } else {
        return null;
    }
}

getPage() ? outputGetPage.innerText = getPage() : outputGetPage.innerText = "NULL";
showSummary();

button_goToURL.addEventListener("click", function () {
    window.location.href = window.location.pathname + input_url.value;
});

function showSummary() {
    summary.innerText = "adress " + window.location.href + " \n cos tam cos tam ze wyrazeniem: \n /\\/35\\.html\\?page=\\d+$/";
}