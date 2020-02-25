
import util from '../helpers/util.js';

import bookData from '../helpers/data/book-data.js'

const addToCartEvent = () => {
console.log('you clicked add to cart')
};
//     let domString = 'this is the cart';
//     util.printToDom('cart-container', domString)

// }








const makeStore = () => {
    let domString = '';
    domString += `<h2>${bookData.name}</h2>`
    domString += `<button id="add-to-cart-button" class="btn btn-dark">Add to Cart</button>`
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent)
}


// makeStore: makeStore, addToCartEvent: addToCartEvent
// export default { test, makeStore, addToCartEvent }
//object shorthand  if both are the same you don't need the value. You can do two and seperate
export default { makeStore }
