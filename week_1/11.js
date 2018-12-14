var input_productPrice = document.getElementById("price"),
    input_productsAmount = document.getElementById("amount"),
    output_currentDiscount = document.getElementById("discount"),
    output_allOrders = document.getElementById("products"),
    output_orderPriceBeforeDiscount = document.getElementById("before_discount"),
    output_orderPriceAfterDiscount = document.getElementById("after_discount"),
    output_productPrice = document.getElementById("product_price"),
    output_productsAmount = document.getElementById("amount_field"),
    discountTable = document.getElementById("discount_table"),
    button_calculateOrder = document.getElementById("calculate_button"),
    button_resetAllOrders = document.getElementById("reset_button"),

    discountTableRows = discountTable.children[1].children,
    allOrders = 0,
    discount = 0,
    priceAfterDiscount,
    highlightedRow = null;

input_productPrice.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        input_productsAmount.focus();
    }
})

input_productsAmount.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        button_calculateOrder.focus();
    }
})

button_calculateOrder.addEventListener("click", function () {

    var product_price = parseInt(input_productPrice.value);
    var amount = parseInt(input_productsAmount.value);

    if (!product_price) {
        input_productPrice.placeholder = "Podaj cenę!";
        input_productPrice.focus();
        return false;
    } else if (!amount) {
        input_productsAmount.placeholder = "Podaj cenę!";
        input_productsAmount.focus();
        return false;
    } else {
        input_productPrice.placeholder = "-";
        input_productsAmount.placeholder = "-";
    }

    allOrders += amount;
    discount = calculateDiscount(allOrders);

    output_allOrders.innerText = allOrders;
    output_currentDiscount.innerText = discount + "%";

    priceAfterDiscount = (amount * product_price) - (amount * product_price) * discount / 100;

    output_productPrice.innerText = product_price;
    output_productsAmount.innerText = amount;
    output_orderPriceBeforeDiscount.innerHTML = amount * product_price + " zł";
    output_orderPriceAfterDiscount.innerText = priceAfterDiscount + " zł";

    button_calculateOrder.innerText = "Oblicz kolejne zakupy";

    console.log("Podstawowa cena produktów to " + amount * product_price + 
                " zł, po obniżce to " + priceAfterDiscount + " zł");

    input_productPrice.value = "";
    input_productsAmount.value = "";
    input_productPrice.focus();
})

button_resetAllOrders.addEventListener("click", function () {
    allOrders = 0;
    discount = 0;
    input_productPrice.focus();
    output_allOrders.innerText = " - ";
    output_currentDiscount.innerText = " - ";
    output_orderPriceBeforeDiscount.innerText = " - ";
    output_orderPriceAfterDiscount.innerText = " - ";
    output_productPrice.innerText = "-";
    output_productsAmount.innerText = "-";
    button_calculateOrder.innerText = "Oblicz pierwsze zakupy";
    discountTableRows[highlightedRow].classList.remove("table-primary");
    highlightedRow = null;
})

function calculateDiscount(productsAmount) {

    discountTableRows[highlightedRow] ? discountTableRows[highlightedRow].classList.remove("table-primary") : null;

    var currentDiscount = null;

    if (productsAmount < 5) {
        currentDiscount = 0;
    } else if (productsAmount >= 5 && productsAmount < 21) {
        currentDiscount = 5;
        highlightedRow = 0;
    } else if (productsAmount >= 21 && productsAmount < 51) {
        currentDiscount = 10;
        highlightedRow = 1;
    } else if (productsAmount >= 51 && productsAmount < 101) {
        currentDiscount = 15;
        highlightedRow = 2;
    } else if (productsAmount >= 101) {
        currentDiscount = 20;
        highlightedRow = 3;
    }

    discountTableRows[highlightedRow] ? discountTableRows[highlightedRow].classList.add("table-primary") : null;

    return currentDiscount;
}