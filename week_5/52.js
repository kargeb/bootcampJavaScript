var form_products = document.getElementById("form_products");

// console.log(form_products.radio_pendrive.checked);

// var radioProduct = document.querySelector("[type='radio']:checked").value, 
var radioProduct = document.querySelectorAll("input[name='product']"),
    radioCurrency = document.querySelectorAll("input[name='currency']"),
    inputNumber = document.getElementById("input_number"),
    output_description = document.getElementById("description"),
    button_calculate = document.getElementById("button_calculate");


console.log(radioProduct);
console.log(radioCurrency);



button_calculate.addEventListener( "click", function () {
    
    // let arr = [...radioProduct];

    // let radioProduct = document.querySelectorAll("input[name='product']");
    let chosenProduct = "",
        chosenCurrency = "",
        chosenNumber = inputNumber.value,
        prices = {
            "pendrive": 2,
            "charger": 54,
            "earphones": 123
        };
        product = {};

        console.log(prices.pendrive);





    for( let key in radioProduct ){
        if(radioProduct[key].checked){
            chosenProduct = radioProduct[key].value
        }
    }

    for( let key in radioCurrency ){
        if(radioCurrency[key].checked){
            chosenCurrency = radioCurrency[key].value
        }
    }

    console.log(inputNumber.value);
    console.log(chosenProduct);
    console.log(prices[chosenProduct]);


    product.name = chosenProduct;
    product.quantity = parseInt(inputNumber.value);
    product.price = prices[chosenProduct];

    let { name: pName, price: pPrice, quantity: pQuantity } = product;


    let info = formatPrice(chosenCurrency)`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

    console.log(info);

    output_description.innerText = info;
    // let product = {
    //     name: "Pendrive 16GB",
    //     price: 23,
    //     quantity: 4
    // };



    // output_description.innerText = "dipka";

    // output_description = formatPrice("GBP")`Kupiłeś produkt '${pName}' w cenie ${pPrice} ${chosenCurrency} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;



    // let product = radioProduct.map( function(elem){

    //     console.log(elem.checked);
    //     console.log(elem.value);

    //     if(elem.checked){
    //         console.log(" z ifa  " + elem.value);
    //         return elem.value;
    //     }
    // } )

    // console.log( product);

    // let checked = arr.filter( function(elem){

    //     console.log(elem);

    //     return elem.checked;
    // } )

    // console.log(checked);

});

// console.dir( radios[0]);

// let { value } = radios[0];

// console.log( value );

// Zakładamy, że taki obiekt byłby dodany
// gdzieś w kodzie HTML w tagu <script>
// przez system CMS generujący widok strony
window.currencies = {
    "PLN": 1,
    "USD": 3.8078,
    "EUR": 4.1794,
    "GBP": 4.9456
};

// let product = {
//     name: "Pendrive 16GB",
//     price: 23,
//     quantity: 4
// };

function formatPrice(currency){

    let countryAbr = currency,
        exchangeRate = window.currencies[ countryAbr ];

    return function(strings, ...values) {

        let output = strings[0] + values[0] + strings[1] + (values[1]/exchangeRate).toFixed(2) + " " +
                     countryAbr + strings[2] + (values[2]/exchangeRate).toFixed(2) + " " + countryAbr + strings[3];

        console.log(strings);             
        console.log(values);             

        return output;
    }
}

// let { name: pName, price: pPrice, quantity: pQuantity } = product;

// let info = formatPrice("GBP")`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

//  console.log(info);






// Kupiłeś produkt 'Pendrive 16GB' w cenie 4.65 GBP za sztukę. Łączna wartość zamówienia to 18.60 GBP.

// function formatPriceImproved(currency, product, price, numberOf) {

// }