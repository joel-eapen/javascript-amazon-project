import { cart, removeFromCart, updateQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';


let cartSummaryHTML = '';

cart.forEach((cartItem) => {

  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });


  cartSummaryHTML +=
    `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update" data-product-id = "${matchingProduct.id}">
                    <span class="update-quantity-text">Update</span>
                    <input class="quantity-input js-qauntity-input-${matchingProduct.id}" type="number" value="${cartItem.quantity}" min="1">
                    <span class="save-quantity-link link-primary js-save" data-product-id = "${matchingProduct.id}">Save</span>
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
})
let cartQuantity = 0;
cart.forEach((item) => {
  cartQuantity += item.quantity;
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
});
document.querySelector('.js-checkout-quantity')
          .innerHTML = `
  Checkout (<a class="return-to-home-link" href="amazon.html" class="js-checkout-quantity">${cartQuantity} items</a>)`;


document.querySelector('.order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    cart.forEach((item) => {
      if (productId === item.productId) {
        cartQuantity -= item.quantity;
        console.log(cartQuantity);
        document.querySelector('.js-checkout-quantity')
          .innerHTML = `
  Checkout (<a class="return-to-home-link" href="amazon.html" class="js-checkout-quantity">${cartQuantity} items</a>)`;
      }
    })
    removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
  });
});




document.querySelectorAll('.js-update').forEach((update)=>{
  update.addEventListener('click',()=>{
    const productId = update.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    if (container) {
      container.classList.add('is-editing-quantity');
    }

  })
});

document.querySelectorAll('.js-save').forEach((save)=>{
  save.addEventListener('click',()=>{
    const productId = save.dataset.productId;
    console.log(productId) ;
    let newQuantity = document.querySelector(`.js-qauntity-input-${productId}`).value;

    updateQuantity(productId, parseInt(newQuantity));
    cart.forEach((item)=>{
      if(item.productId === productId){
        cartQuantity += parseInt(newQuantity);
        console.log(cartQuantity);
        document.querySelector('.js-checkout-quantity')
          .innerHTML = `
  Checkout (<a class="return-to-home-link" href="amazon.html" class="js-checkout-quantity">${cartQuantity} items</a>)`;
      } 
    })
    
  })
})