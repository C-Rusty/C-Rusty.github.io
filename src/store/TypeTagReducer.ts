import { createSlice } from "@reduxjs/toolkit";

export type TypeTag = {chosen: `All` | `Articles` | `Cases`};

const initialState: TypeTag = {chosen: `All`};

export const typeTagReducer = createSlice({
    name: `TypeTag`,
    initialState,
    reducers: {
        setTypeTag: (state, action) => {
            state.chosen = action.payload
        }
    },
});

export const { setTypeTag } = typeTagReducer.actions;

export default typeTagReducer.reducer;