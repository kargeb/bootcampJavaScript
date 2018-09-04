var discount_output = document.getElementById("discount"),
    products_output = document.getElementById("products"),
    before_discount = document.getElementById("before_discount"),
    after_discount = document.getElementById("after_discount"),
    discount_table = document.getElementById("discount_table"),
    button = document.querySelector("button");


// console.log(product_price);
// console.log(amount);
console.log(button);
console.log(discount_output.innerText);
console.log(products_output.innerText);
console.log(before_discount.innerText);
console.log(after_discount.innerText);
console.log(button.innerText);
console.log(discount_table.children[1].children);

var arr = discount_table.children[1].children;


var number_of_products = 0,
    discount = 0,
    sum,
    color_cell = null;

button.addEventListener("click", function(){

    var product_price = parseInt( document.querySelector("input[name='price']").value );
    var amount = parseInt( document.querySelector("input[name='amount']").value );

    number_of_products += amount;
    discount = calculateDiscount(number_of_products);

    products_output.innerText = number_of_products;
    discount_output.innerText = discount + " %";
    
    var sum =  (amount * product_price) - (amount * product_price)*discount/100;
    // var sum =  (number_of_products * product_price) - (number_of_products * product_price)*discount/100;

    console.log(number_of_products * product_price);
    console.log(sum);

    before_discount.innerText = amount * product_price + " zł";
    after_discount.innerText = sum + " zł";

    button.innerText = "Oblicz kolejne zakupy";

    
})

function calculateDiscount(amount){

    
    arr[color_cell] ? arr[color_cell].classList.remove("table-primary") : null;

    var dis = null;

    if(amount < 5 ){
        dis = 0;
    } else if(amount >=5 && amount < 21) {
        dis = 5;
        color_cell = 0;
    } else if(amount >=21 && amount < 51) {
        dis = 10;
        color_cell = 1;
    } else if(amount >=51 && amount < 101) {
        dis = 15;
        color_cell = 2;
    } else if(amount >=101) {
        dis = 20;
        color_cell = 3;
    }

    arr[color_cell] ? arr[color_cell].classList.add("table-primary") : null;

    return dis;
}





