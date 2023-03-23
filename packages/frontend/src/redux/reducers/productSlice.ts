import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '@/services/productService';
import { ProductState } from '@/interface/reduxState';

// Async Actions
export const hotProducts: any = createAsyncThunk('/hotProducts', async () => {
    return await productService.hotProducts();
});
export const flashSaleProductAction: any = createAsyncThunk(
    '/flashSaleProductAction',
    async () => {
        return await productService.flashSaleProductAction();
    },
);
export const productListAction: any = createAsyncThunk(
    '/productList',
    async () => {
        return await productService.productList();
    },
);

// State
export const initialState: ProductState = {
    loading: false,
    hotProduct: [],
    flashSaleProduct: [],
    productList: [],
};

// Reducers
const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // hotProducts
        builder.addCase(hotProducts.fulfilled, (state, action) => {
            state.hotProduct = action.payload;
        });
        // flashSaleProductAction
        builder.addCase(flashSaleProductAction.fulfilled, (state, action) => {
            state.flashSaleProduct = action.payload;
        });
        // productListAction
        builder.addCase(productListAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(productListAction.fulfilled, (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        });
    },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
