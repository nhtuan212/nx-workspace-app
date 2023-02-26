import { createAsyncThunk } from '@reduxjs/toolkit';
import { menuApi } from '@/pages/api/menuApi';

export const getMenu: any = createAsyncThunk('/getMenus', async () => {
    return await menuApi.getMenu();
});
