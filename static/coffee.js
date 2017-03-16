// Set these variables to their DOM elements

var myImage = document.getElementById("coffee-image");
myImage.setAttribute("src", "static/coffee_beans.jpg")

var espresso = document.getElementById("espresso");
var latte = document.getElementById("latte")
var hotChocolate = document.getElementById("hot-chocolate")

var myRevenueMessage = document.getElementById("revenue");
myRevenueMessage.innerHTML = "$" + 0;

var drinksOrdered = [];

function revenue(drinksOrdered, prices) {
    var total = 0;
    for (var drink of drinksOrdered) {
        total += prices[drink];
    }
    // return total;
    myRevenueMessage.innerHTML = "$" + total
}

function makeCoffee(drinkType) {
    drinksOrdered.push(drinkType);
    console.log(drinksOrdered);
    myImage.setAttribute("src", "static/coffee_machine.jpg");
    setTimeout(function () {
        myImage.setAttribute("src", "static/coffee_mug.jpg")
        }, 1500);
    setTimeout(function () {
        myImage.setAttribute("src", "static/coffee_beans.jpg")
        }, 4000);
    // myRevenueMessage.innerHTML = "$" + revenue(drinksOrdered, prices);
    revenue(drinksOrdered, prices);
}

myImage.addEventListener('click', function () { return makeCoffee("brew")}); // this is like super in py classes, threfore return even when not needed

espresso.addEventListener('click', function () { return makeCoffee("espresso")});
latte.addEventListener('click', function () { return makeCoffee("latte")});
hotChocolate.addEventListener('click', function () { return makeCoffee("hot chocolate")});


// use this JavaScript object in further study step

var prices = {
    "brew": 2.05,
    "espresso": 3.25,
    "latte": 4.15,
    "hot chocolate": 2.50
};