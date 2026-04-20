import { cart } from '../../data/cart.js';


export function renderCheckoutHeader(productId) {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
        if (productId === item.productId) {
        cartQuantity -= item.quantity;
    }
    });
    const checkoutHTML = `
      Checkout (<a class="return-to-home-link" href="amazon.html" class="js-checkout-quantity">${cartQuantity} items</a>)
      `;

    document.querySelector('.js-checkout-quantity').innerHTML = checkoutHTML;
};


