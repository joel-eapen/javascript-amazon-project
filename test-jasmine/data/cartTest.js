import { updateQuantity, updateDeliveryOption } from "../../data/cart.js";

describe('test suite :updateQuantity', () => {
    it('for zero quantity', () => {
        const updatedQuantity = updateQuantity("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 1);
        expect(updatedQuantity).toEqual(1);

    });
});

describe('test suite :updateDeliveryOption', () => {
    it('for delivery option id 1', () => {
        const deliverOption = updateDeliveryOption("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", '2');
        expect(deliverOption).toEqual('2');

    })
})

