import { createSlice } from "@reduxjs/toolkit";

export const categoryTagReducer = createSlice({
    name: `categoryTag`,
    initialState: {
        value: `All`
    },
    reducers: {
        setCategoryTag: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { setCategoryTag } = categoryTagReducer.actions;

export default categoryTagReducer.reducer;