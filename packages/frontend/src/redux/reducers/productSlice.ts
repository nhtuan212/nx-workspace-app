import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '@/services/productService';
import { ProductState } from '@/interface/reduxState';

// Async Actions
// hotProducts
export const hotProducts: any = createAsyncThunk('/hotProducts', async () => {
    return await productService.hotProducts();
});
// flashSaleProductAction
export const flashSaleProductAction: any = createAsyncThunk(
    '/flashSaleProductAction',
    async () => {
        return await productService.flashSaleProductAction();
    },
);
// productByCategoryAction
export const productByCategoryAction: any = createAsyncThunk(
    '/productByCategory',
    async ({ slug }: any) => {
        return await productService.productByCategory({ slug });
    },
);
// productAction
export const productAction: any = createAsyncThunk(
    '/productAction',
    async ({ slug }: any) => {
        return await productService.productAction({ slug });
    },
);
// productSearchAction
export const productSearchAction: any = createAsyncThunk(
    '/productSearch',
    async ({ keyword }: any) => {
        return await productService.productSearch({ keyword });
    },
);

// State
export const initialState: ProductState = {
    loading: false,
    hotProduct: [],
    flashSaleProduct: [],
    productList: [],
    productDetail: [],
    productSearch: [],
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
        // productByCategoryAction
        builder.addCase(productByCategoryAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(productByCategoryAction.fulfilled, (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        });
        // productAction
        builder.addCase(productAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(productAction.fulfilled, (state, action) => {
            state.loading = false;
            state.productDetail = action.payload;
        });
        // productSearchAction
        builder.addCase(productSearchAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(productSearchAction.fulfilled, (state, action) => {
            state.loading = false;
            state.productSearch = action.payload;
        });
    },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
