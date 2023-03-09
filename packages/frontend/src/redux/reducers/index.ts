import { combineReducers } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';
import productSlice from './productSlice';
import profileSlice from '../reducers/profileSlice';

export const rootReducer = combineReducers({
    menu: menuSlice,
    product: productSlice,
    profile: profileSlice,
});
