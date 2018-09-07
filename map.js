const cart = [ {name: "Widget", price: 9.95 }, {name: "Gadget", price: 22.95}];
console.log(cart);

const names = cart.map(x => x.name);
console.log(names);

const prices = cart.map(x => x.price);
console.log(prices);

const discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices);



