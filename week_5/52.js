var radioProduct = document.querySelectorAll("input[name='product']"),
    radioCurrency = document.querySelectorAll("input[name='currency']"),
    inputNumber = document.getElementById("input_number"),
    output_description = document.getElementById("description"),
    button_calculate = document.getElementById("button_calculate");

button_calculate.addEventListener( "click", function () {
    
    let chosenProduct = "",
        chosenCurrency = "",
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

    product.name = chosenProduct;
    product.quantity = parseInt(inputNumber.value);
    product.price = prices[chosenProduct];

    let { name: pName, price: pPrice, quantity: pQuantity } = product;

    let info = formatPrice(chosenCurrency)`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

    output_description.innerText = info;
});

// Zakładamy, że taki obiekt byłby dodany
// gdzieś w kodzie HTML w tagu <script>
// przez system CMS generujący widok strony
window.currencies = {
    "PLN": 1,
    "USD": 3.8078,
    "EUR": 4.1794,
    "GBP": 4.9456
};

function formatPrice(currency){

    let exchangeRate = window.currencies[ currency ];

    return function(strings, ...values) {

        let output = strings[0] + values[0] + strings[1] + (values[1]/exchangeRate).toFixed(2) + " " +
                     currency + strings[2] + (values[2]/exchangeRate).toFixed(2) + " " + currency + strings[3];

        return output;
    }
}