import { createSlice } from "@reduxjs/toolkit";

export const buttonClickReducer = createSlice({
    name: `buttonClicked`,
    initialState: {
        value: `none`
    },
    reducers: {
        setComponent: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {setComponent} = buttonClickReducer.actions;

export default buttonClickReducer.reducer;