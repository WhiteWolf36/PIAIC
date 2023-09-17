interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type Cart = {
  products: Product[];
};

interface Customer {
  id: number;
  name: string;
  email: string;
}

type Order = {
  customer: Customer;
  cart: Cart;
};

function calculatePrice(cartObj: Cart) {
  let price = 0;
  cartObj.products.forEach((product) => {
    price += product.price;
  });
  console.log(price);
}

const prod1: Product = {
  id: 1,
  name: "Chocolate",
  price: 12,
  category: "Food",
};
const prod2: Product = {
  id: 2,
  name: "Candy",
  price: 2,
  category: "Food",
};
const prod3: Product = {
  id: 3,
  name: "Hands-Free",
  price: 10,
  category: "Accessories",
};

const cart: Cart = { products: [prod1, prod2, prod3] };

calculatePrice(cart);

//The code is available on github for the intersection part

const callsd = (callback: unknown) => {
  if (typeof callback === "function") callback();
};
