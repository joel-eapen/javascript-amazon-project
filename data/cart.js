export let cart;
loadFromStorage();
export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1'
        }, {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 2,
            deliveryOptionId: '2'
        }]
    }

};
export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    })

    cart = newCart;
    saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
    let updatedQuantity = 0;
    cart.forEach((item) => {
        if (item.productId === productId) {
            item.quantity = newQuantity;
            updatedQuantity = item.quantity;

        }
    })
    saveToStorage();
    return updatedQuantity;

}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((item) => {
        if (item.productId === productId) {
            matchingItem = item;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
    return matchingItem.deliveryOptionId;

};

export function itemUpdate() {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
}