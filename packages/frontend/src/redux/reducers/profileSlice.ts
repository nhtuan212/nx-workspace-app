import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// State
export const initialState = {
    name: null,
};

// Reducers
const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            state.name = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(HYDRATE, (state, action: any) => {
            state.name = action.payload.profile.name;
        });
    },
});

export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;
