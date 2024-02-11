import { createSlice } from "@reduxjs/toolkit";

export const DeviceTypeReducer = createSlice({
    name: `ScreenType`,
    initialState: {
        value: `desktop`
    },
    reducers: {
        setScreen: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setScreen } = DeviceTypeReducer.actions;

export default DeviceTypeReducer.reducer;