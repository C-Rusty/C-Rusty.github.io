import { createSlice } from "@reduxjs/toolkit";

export const typeTagReducer = createSlice({
    name: `TypeTagReducer`,
    initialState: {
        value: `All`
    },
    reducers: {
        setTypeTag: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { setTypeTag } = typeTagReducer.actions;

export default typeTagReducer.reducer;