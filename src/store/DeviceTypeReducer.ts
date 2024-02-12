import { createSlice } from "@reduxjs/toolkit";

export type ScreenTypeState = {screenType: `desktop` | `mobile`};

const initialState: ScreenTypeState = {screenType: window.innerWidth >= 991 ? `desktop` : `mobile`};

export const DeviceTypeReducer = createSlice({
    name: `screen`,
    initialState,
    reducers: {
        setScreen: (state, action) => {
            state.screenType = action.payload
        }
    }
});

export const { setScreen } = DeviceTypeReducer.actions;

export default DeviceTypeReducer.reducer;