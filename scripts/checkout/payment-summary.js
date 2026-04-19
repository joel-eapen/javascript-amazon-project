import { cart } from '../../data/cart.js'
import { products, getProduct } from '../../data/products.js';
import { deliveryOption, getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
import { renderOrderSummary } from './order-summary.js';

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let productShippingCents = 0;
    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);
        productPriceCents += matchingProduct.priceCents * cartItem.quantity;
        const deliveryOptionId = cartItem.deliveryOptionId;
        const matchingDeliveryOption = getDeliveryOption(deliveryOptionId);
        productShippingCents += matchingDeliveryOption.priceCents;

    })
    const totalBeforeTaxCents = productPriceCents + productShippingCents;
    const estimatedTaxCents = totalBeforeTaxCents * 0.1;
    const estimatedTotalCents = totalBeforeTaxCents + estimatedTaxCents;

    const paymentSummaryHTML =
        `
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (<span class="js-cart-quantity">0</span>):</div>
          <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${formatCurrency(productShippingCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${formatCurrency(estimatedTaxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${formatCurrency(estimatedTotalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
    
    `;
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        
    });
 


};

