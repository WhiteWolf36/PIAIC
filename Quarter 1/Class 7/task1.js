"use strict";
function calculatePrice(cartObj) {
    let price = 0;
    cartObj.products.forEach((product) => {
        price += product.price;
    });
    console.log(price);
}
const prod1 = {
    id: 1,
    name: "Chocolate",
    price: 12,
    category: "Food",
};
const prod2 = {
    id: 2,
    name: "Candy",
    price: 2,
    category: "Food",
};
const prod3 = {
    id: 3,
    name: "Hands-Free",
    price: 10,
    category: "Accessories",
};
const cart = { products: [prod1, prod2, prod3] };
calculatePrice(cart);
//The code is available on github for the intersection part
const callsd = (callback) => {
    if (typeof callback === "function")
        callback();
};
