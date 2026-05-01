import { formatCurrency } from "../scripts/utils/money.js";
import { products } from "../data/products.js";
import { orders } from "../data/orders.js";
import { cart } from "../data/cart.js";

const now = new Date();
console.log(cart);
console.log(orders);
let matchingItem = [];
orders[0].products.forEach((product) => {
    products.forEach((item) => {
        if (product.productId === item.id) {
            matchingItem.push(item);
        }
    })
});

console.log(matchingItem);






function renderOrders() {
    let ordersHTML = '';
    matchingItem.forEach((item) => {
        orders[0].products.forEach((product) => {
            if (product.productId === item.id) {
                const estimatedDeliveryDate = new Date(product.estimatedDeliveryTime);

                const formattedDate = estimatedDeliveryDate.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                });

                ordersHTML += `
        <div class="order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${now.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}</div >
              </div >
    <div class="order-total">
        <div class="order-header-label">Total:</div>
        <div>$${formatCurrency(item.priceCents * product.quantity)}</div>
    </div>
            </div >

    <div class="order-header-right-section">
        <div class="order-header-label">Order ID:</div>
        <div>${orders[0].id}</div>
    </div>
          </div >

    <div class="order-details-grid">
        <div class="product-image-container">
            <img src="${item.image}">
        </div>

        <div class="product-details">
            <div class="product-name">
                ${item.name}
            </div>
            <div class="product-delivery-date">
                Arriving on: ${formattedDate}
            </div>
            <div class="product-quantity">
                Quantity: ${product.quantity}
            </div>
            <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
            </button>
        </div>

        <div class="product-actions">
            <a href="tracking.html?orderId=${orders[0].id}&productId=${item.id}">

                <button class="track-package-button button-secondary">
                    Track package
                </button>
            </a>
        </div>
    </div >
    </div >


    `;
            }
        })

        document.querySelector('.orders-grid').innerHTML = ordersHTML;

    });


}

renderOrders();
