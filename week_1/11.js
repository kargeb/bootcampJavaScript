var discount_output = document.getElementById("discount"),
    products_output = document.getElementById("products"),
    before_discount = document.getElementById("before_discount"),
    after_discount = document.getElementById("after_discount"),
    discount_table = document.getElementById("discount_table"),
    button_calc = document.getElementById("calculate_button"),
    button_reset = document.getElementById("reset_button"),
    product_price_field = document.getElementById("product_price"),
    amount_field = document.getElementById("amount_field"),
    hidden_row = document.getElementById("hiddenRow"),
    input_product_price = document.getElementById("price"),
    input_product_amount = document.getElementById("amount");

var discount_table_rows = discount_table.children[1].children;

var number_of_products = 0,
    discount = 0,
    sum,
    color_cell = null;  

input_product_price.addEventListener("keypress", function(e){
    if( e.key == "Enter" ){
        input_product_amount.focus();
    }
})

input_product_amount.addEventListener("keypress", function(e){
    if( e.key == "Enter" ){
        button_calc.focus();
    }
})

button_calc.addEventListener("click", function () {

    var product_price = parseInt(input_product_price.value);
    var amount = parseInt(input_product_amount.value);

    if( !product_price ) {
        input_product_price.placeholder = "Podaj cenę!";
        input_product_price.focus();
        return false;
    } else if (!amount) {
        input_product_amount.placeholder = "Podaj cenę!";
        input_product_amount.focus();
        return false;
    } else {
        input_product_price.placeholder = "-";
        input_product_amount.placeholder = "-";
    }

    number_of_products += amount;
    discount = calculateDiscount(number_of_products);

    products_output.innerText = number_of_products;
    discount_output.innerText = discount + "%";

    var sum = (amount * product_price) - (amount * product_price) * discount / 100;

    before_discount.innerHTML =  amount * product_price + " zł";
    after_discount.innerText = sum + " zł";
    product_price_field.innerText = product_price;
    amount_field.innerText = amount;

    button_calc.innerText = "Oblicz kolejne zakupy";

    console.log("Podstawowa cena produktów to " + amount * product_price + " zł, po obniżce to " + sum + " zł");

    input_product_price.value = "";
    input_product_amount.value = "";
    input_product_price.focus();
})

button_reset.addEventListener("click", function () {

        number_of_products = 0;
        discount = 0;
        sum = 0;
        input_product_price.focus();
        products_output.innerText = " - ";
        discount_output.innerText = " - ";
        before_discount.innerText = " - ";
        after_discount.innerText = " - ";
        product_price_field.innerText = "-";
        amount_field.innerText = "-";
        button_calc.innerText = "Oblicz pierwsze zakupy";
        discount_table_rows[color_cell].classList.remove("table-primary");
        color_cell = null;
})

function calculateDiscount(amount) {

    discount_table_rows[color_cell] ? discount_table_rows[color_cell].classList.remove("table-primary") : null;

    var dis = null;

    if (amount < 5) {       // opis opis opis
        dis = 0;
    } else if (amount >= 5 && amount < 21) {        // cos cos
        dis = 5;
        color_cell = 0;
    } else if (amount >= 21 && amount < 51) {       // cosa cosa cos
        dis = 10;                                   //djastd75tuyastd785678 asd
        color_cell = 1;
    } else if (amount >= 51 && amount < 101) {
        dis = 15;
        color_cell = 2;
    } else if (amount >= 101) {
        dis = 20;
        color_cell = 3;
    }

    discount_table_rows[color_cell] ? discount_table_rows[color_cell].classList.add("table-primary") : null;

    return dis;
}