import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getMenu } from '@actions/menuActions';
import { initialMenuReducer } from './initialState';
import { menuApi } from '@/pages/api/menuApi';

export const getMenu: any = createAsyncThunk('/getMenus', async () => {
    return await menuApi.getMenu();
});

const menuReducer = createSlice({
    name: 'menuReducer',
    initialState: initialMenuReducer,
    reducers: {},
    extraReducers: {
        [getMenu.fulfilled]: (state, action) => {
            state.getMenu = action.payload;
        },
    },
});

// export const {} = menuReducer.actions;
export default menuReducer.reducer;
