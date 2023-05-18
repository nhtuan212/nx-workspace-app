export const moneyFormat = (price: number, unit: string) => {
    return `${new Intl.NumberFormat('vi-VN').format(price)} ${unit}`;
};
