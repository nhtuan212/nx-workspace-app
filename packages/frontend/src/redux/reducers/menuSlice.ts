import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { menuService } from '@/services/menuService';
import { MenuState } from '@/interface/reduxState';
import { HYDRATE } from 'next-redux-wrapper';

// Async Actions
export const getMenuAction: any = createAsyncThunk('/getMenu', async () => {
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
    reducers: {
        resetGetMenuAction(state) {
            state.getMenu = [];
        },
    },
    extraReducers: builder => {
        builder.addCase(getMenuAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(getMenuAction.fulfilled, (state, action: any) => {
            state.getMenu = action.payload;
            state.loading = false;
        });
        builder.addCase(HYDRATE, (state, action: AnyAction) => {
            // handle call on getServerSideProps
            state.getMenu = action.payload.menu.getMenu;
            state.loading = false;
        });
    },
});

export const { resetGetMenuAction } = menuSlice.actions;
export default menuSlice.reducer;
