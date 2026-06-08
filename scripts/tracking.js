import { orders } from '../data/orders.js';

console.log(orders[0]);
const url = new URL(window.location.href);
const productId = url.searchParams.get('productId');

console.log(productId);

let matchingItem = [];
orders[0].products.forEach((product) => {
    if (product.productId === productId) {
        matchingItem.push(product);
    }
});
console.log(matchingItem[0])


const deliveryDate = new Date(matchingItem[0].estimatedDeliveryTime);
const formattedDate = deliveryDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});

console.log(formattedDate);


function renderTracking() {
    let trackingHTML = '';
    trackingHTML +=
        `      <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${formattedDate}
        </div>

        <div class="product-info">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div class="product-info">
          Quantity: ${matchingItem[0].quantity}
        </div>

        <img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
      `;

    document.querySelector('.main')
        .innerHTML = trackingHTML;

}

renderTracking();