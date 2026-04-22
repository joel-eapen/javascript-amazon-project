import { cart, removeFromCart, saveToStorage, updateQuantity, updateDeliveryOption, itemUpdate } from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOption, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './payment-summary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';
import { renderDeliveryOptions } from '../../data/deliveryOptions.js';



export function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {

    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);

    const deliverOptionId = cartItem.deliveryOptionId;
    const matchingDeliveryOption = getDeliveryOption(deliverOptionId);
    const dateString = renderDeliveryOptions(matchingDeliveryOption);


    cartSummaryHTML +=
      `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date  js-delivery-date-${matchingProduct.id}">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${matchingProduct.getPrice()}
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
                
                
                ${deliveryOptionHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>`
  });


  function deliveryOptionHTML(matchingProduct, cartItem) {
    let deliveryHTML = '';
    deliveryOption.forEach((deliveryOption) => {

      const dateString = renderDeliveryOptions(deliveryOption);
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId
      deliveryHTML +=
        `<div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" 
        ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
           $${(formatCurrency(deliveryOption.priceCents))} - Shipping
          </div>
        </div>
      </div>
    `

    });
    return deliveryHTML;
  }
  renderCheckoutHeader();
  document.querySelector('.order-summary').innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      renderCheckoutHeader(productId)
      removeFromCart(productId);
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
      renderPaymentSummary();
    });
  });




  document.querySelectorAll('.js-update').forEach((update) => {
    update.addEventListener('click', () => {
      const productId = update.dataset.productId;
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      if (container) {
        container.classList.add('is-editing-quantity');
      }

    })
    renderPaymentSummary();
  });

  document.querySelectorAll('.js-save').forEach((save) => {
    save.addEventListener('click', () => {
      const productId = save.dataset.productId;
      console.log(productId);
      let newQuantity = document.querySelector(`.js-qauntity-input-${productId}`).value;

      updateQuantity(productId, parseInt(newQuantity));
      renderPaymentSummary();
      renderOrderSummary();
    }
    )
  });

  document.querySelectorAll('.js-delivery-option').forEach((option) => {
    option.addEventListener('click', () => {
      const productId = option.dataset.productId;
      const deliveryOptionId = option.dataset.deliveryOptionId;
      updateDeliveryOption(productId, deliveryOptionId);
      renderPaymentSummary();
      renderOrderSummary();

    })
  });
};




