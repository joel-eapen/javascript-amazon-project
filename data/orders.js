import { formatCurrency } from "../scripts/utils/money.js";
import { products } from "./products.js";

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
    orders.unshift(order);
    saveToStorage();


}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

