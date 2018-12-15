var form = document.querySelector("form"),
    message_name = document.getElementById("message_name"),
    message_tel = document.getElementById("message_tel"),
    message_email = document.getElementById("message_email"),
    message_card = document.getElementById("message_card"),
    message_text = document.getElementById("message_text");

console.log(message_name);

form.addEventListener("submit", function (e) {

    var checksum = 0;
    var message = {};

    e.preventDefault();

    if (form.name.value == "") {
        form.name.placeholder = "Pole obowiązkowe!";
        form.name.classList.add("wrong");
    } else {
        form.name.classList.remove("wrong");
        message.name = form.name.value;
        checksum++
    }

    if (form.message.value == "") {
        form.message.placeholder = "Pole obowiązkowe!";
        form.message.classList.add("wrong");
    } else {
        form.message.classList.remove("wrong");
        message.text = form.message.value;
        checksum++
    }

    if (form.email.value == "") {
        form.email.placeholder = "Pole obowiązkowe!";
        form.email.classList.add("wrong");
    } else if (form.email.value.indexOf("@") == -1) {
        form.email.value = "";
        form.email.classList.add("wrong");
        form.email.placeholder = "Niepoprawny adres email!";
    } else {
        form.email.classList.remove("wrong");
        message.email = form.email.value;
        checksum++
    }

    if (form.tel.value == "") {
        form.tel.placeholder = "Pole obowiązkowe!";
        form.tel.classList.add("wrong");
    } else if (isNaN(Number(form.tel.value))) {
        form.tel.value = "";
        form.tel.classList.add("wrong");
        form.tel.placeholder = "Niepoprawny numer! Dozwolone wyłącznie liczby.";
    } else {
        form.tel.classList.remove("wrong");
        message.tel = form.tel.value;
        checksum++
    }

    if (checksum == 4) {
        show_message(message);
    }
})

function show_message(message) {
    message_card.classList.remove("hidden");
    message_name.innerText = message.name;
    message_tel.innerText = message.tel;
    message_email.innerText = message.email;
    message_text.innerText = message.text;
}