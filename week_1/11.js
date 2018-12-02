var discount_output = document.getElementById("discount"),
    products_output = document.getElementById("products"),
    before_discount = document.getElementById("before_discount"),
    after_discount = document.getElementById("after_discount"),
    discount_table = document.getElementById("discount_table"),
    result_table_cells = document.querySelectorAll(".discount_cell"),
    button_calc = document.getElementById("calculate_button"),
    button_reset = document.getElementById("reset_button");
    // hidden_elements = document.getElementsByClassName("invisible");

var discount_table_rows = discount_table.children[1].children;

var number_of_products = 0,
    discount = 0,
    sum,
    color_cell = null;




button_calc.addEventListener("click", function () {

    var product_price = parseInt(document.querySelector("input[name='price']").value);
    var amount = parseInt(document.querySelector("input[name='amount']").value);

    number_of_products += amount;
    discount = calculateDiscount(number_of_products);

    products_output.innerText = number_of_products;
    discount_output.innerText = discount + "%";

    var sum = (amount * product_price) - (amount * product_price) * discount / 100;

    before_discount.innerHTML = "<small>" + amount * product_price + " zł" + "</small>";
    after_discount.innerText = sum + " zł";

    button_calc.innerText = "Oblicz kolejne zakupy";

    console.log("Podstawowa cena produktów to " + amount * product_price + " zł, po obniżce to " + sum + " zł");

})

button_reset.addEventListener("click", function () {

    if (number_of_products) {
        number_of_products = 0;
        discount = 0;
        sum = 0;
        discount_table_rows[color_cell].classList.remove("table-primary");
        result_table_cells[0].classList.remove("table-primary");
        result_table_cells[1].classList.remove("table-primary");
        color_cell = null;

        products_output.innerText = " - ";
        discount_output.innerText = " - ";
        before_discount.innerText = " - ";
        after_discount.innerText = " - ";
        button_calc.innerText = "Oblicz pierwsze zakupy";
    }
})

function calculateDiscount(amount) {

    discount_table_rows[color_cell] ? discount_table_rows[color_cell].classList.remove("table-primary") : null;

    var dis = null;

    if (amount < 5) {
        dis = 0;
    } else if (amount >= 5 && amount < 21) {
        dis = 5;
        color_cell = 0;
    } else if (amount >= 21 && amount < 51) {
        dis = 10;
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





