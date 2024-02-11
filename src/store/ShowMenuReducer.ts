import { createSlice } from "@reduxjs/toolkit";

export const ShowMenuReducer = createSlice({
    name: `menu`,
    initialState: {
        value: false as boolean
    },
    reducers: {
        setState: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { setState } = ShowMenuReducer.actions;

export default ShowMenuReducer.reducer;