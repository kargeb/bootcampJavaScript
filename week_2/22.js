var form = document.querySelector("form");

// console.log(form);

// console.log(form.email);
// console.log(form.button);

// console.log(form.button.value);

// console.log(form.children);

// console.log(form[4]);

// console.log(form.email.value);

// var dupa = "1234";
// var kupa = "1234sdf";

// console.log(Number(dupa));
// console.log(Number(kupa));

// form.name.classList.add("wrong");

form.addEventListener("submit", function(e){

    var checksum = 0;

    e.preventDefault();

    // console.log(form.email.value);

    // console.log( typeof form.name.value);

    if(form.name.value == ""){
        form.name.placeholder = "Pole obowiązkowe!";
        form.name.classList.add("wrong");
    } else {
        form.name.classList.remove("wrong");
        checksum++
    }

    if(form.message.value == ""){
        form.message.placeholder = "Pole obowiązkowe!";
        form.message.classList.add("wrong");
    } else {
        form.message.classList.remove("wrong");
        checksum++
    }

    if(form.email.value == ""){
        form.email.placeholder = "Pole obowiązkowe!";
        form.email.classList.add("wrong");
    } else if( form.email.value.indexOf("@") == -1 ){
        form.email.value = "";
        form.email.classList.add("wrong");
        form.email.placeholder = "Niepoprawny adres email!";
    } else {
        form.email.classList.remove("wrong");
        checksum++
    }

    if(form.tel.value == ""){
        form.tel.placeholder = "Pole obowiązkowe!";
        form.tel.classList.add("wrong");
    } else if( isNaN( Number( form.tel.value))){
        form.tel.value = "";
        form.tel.classList.add("wrong");
        form.tel.placeholder = "Niepoprawny numer! Dozwolone wyłącznie liczby.";
    } else {
        form.tel.classList.remove("wrong");
        checksum++
    }    



    console.log(checksum);
})

