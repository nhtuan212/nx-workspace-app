import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { menuService } from '@/services/menuService';
import { MenuState } from '@/interface/reduxState';

// Async Actions
export const getMenu: any = createAsyncThunk('/getMenu', async () => {
    return await menuService.getMenu();
});

// State
export const initialState: MenuState = {
    loading: false,
    getMenu: [],
};

// Reducers
const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMenu.pending, state => {
            state.loading = true;
        });
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.getMenu = action.payload;
            state.loading = false;
        });
    },
});

// export const {} = menuSlice.actions;
export default menuSlice.reducer;
