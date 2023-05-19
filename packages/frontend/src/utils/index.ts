import { PRICE_UNIT } from '@/constants';

export const moneyFormat = (price: number) => {
    // Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters
    const options = { style: 'currency', currency: PRICE_UNIT };
    const numberFormat = new Intl.NumberFormat('vi-VN', options);
    return numberFormat.format(price);
};
