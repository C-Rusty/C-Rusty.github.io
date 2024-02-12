import { createSlice } from "@reduxjs/toolkit";

export type MenuState = {isVisible: boolean};

const initialState: MenuState = {isVisible: false};

export const MenuStateReducer = createSlice({
    name: `menu`,
    initialState,
    reducers: {
        setState: (state, action) => {
            state.isVisible = action.payload;
        },
    }
});

export const { setState } = MenuStateReducer.actions;

export default MenuStateReducer.reducer;