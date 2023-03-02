import menuSlice from './menuSlice';
import productSlice from './productSlice';

export const rootReducer = {
    menu: menuSlice,
    product: productSlice,
};
