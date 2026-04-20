import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOption = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0

}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliverOptionId) {
    let matchingDeliveryOption;
    deliveryOption.forEach((option) => {
        if (deliverOptionId === option.id) {
            matchingDeliveryOption = option;
        }
    });
    return matchingDeliveryOption || deliveryOption[0];
};

export function renderDeliveryOptions(deliveryOption) {
    let daysLeft = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();

    while (daysLeft > 0) {
        deliveryDate = deliveryDate.add(1, 'day');
        if (
            deliveryDate.day() !== 0 &&
            deliveryDate.day() !== 6
        ) {
            daysLeft--;
        }
    }
    return deliveryDate.format('dddd, MMMM D');

}