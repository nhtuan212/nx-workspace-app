import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { menuService } from '@/services/menuService';
import { MenuState } from '@/interface/reduxState';

// Async Actions
export const getMenu: any = createAsyncThunk('/getMenu', async () => {
    return await menuService.getMenu();
});

// State
export const initialState: MenuState = {
    getMenu: [],
};

// Reducers
const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.getMenu = action.payload;
        });
    },
});

// export const {} = menuSlice.actions;
export default menuSlice.reducer;
