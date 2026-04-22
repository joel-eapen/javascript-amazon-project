function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage: function () {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = [{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: '1'
                }, {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 2,
                    deliveryOptionId: '2'
                }]
            }

        },

        saveToStorage: function () {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            })

            this.cartItems = newCart;
            this.saveToStorage();
        },
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
            this.cartItems.forEach((item) => {
                if (item.productId === productId) {
                    matchingItem = item;
                }
            });
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
            return matchingItem.deliveryOptionId;

        },
        updateQuantity(productId, newQuantity) {
            let updatedQuantity = 0;
            this.cartItems.forEach((item) => {
                if (item.productId === productId) {
                    item.quantity = newQuantity;
                    updatedQuantity = item.quantity;

                }
            })
            this.saveToStorage();
            return updatedQuantity;

        },
        itemUpdate() {
            let cartQuantity = 0;
            this.cartItems.forEach((item) => {
                cartQuantity += item.quantity;
                document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
            });
        }

    };

    return cart;

}


const cart = Cart('cart-oop');

const businessCart = Cart('business-cart');

businessCart.loadFromStorage();
cart.loadFromStorage();
businessCart.removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
console.log(businessCart);
console.log(cart);








