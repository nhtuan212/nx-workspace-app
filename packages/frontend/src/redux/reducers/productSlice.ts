import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '@/services/productService';
import { ProductState } from '@/interface/reduxState';

// Async Actions
export const hotProducts: any = createAsyncThunk('/hotProducts', async () => {
    return await productService.hotProducts();
});
export const flashSaleProductAction: any = createAsyncThunk('/flashSaleProductAction', async () => {
    return await productService.flashSaleProductAction();
});
export const listProductAction: any = createAsyncThunk('/listProduct', async () => {
    return await productService.listProduct();
});

// State
export const initialState: ProductState = {
    loading: false,
    hotProduct: [],
    flashSaleProduct: [],
    listProduct: [],
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
        // listProductAction
        // builder.addCase(listProductAction.pending, (state) => {
        //     state.loading = true;
        // });
        builder.addCase(listProductAction.fulfilled, (state, action) => {
            state.loading = false;
            state.listProduct = action.payload;
        });
    },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
