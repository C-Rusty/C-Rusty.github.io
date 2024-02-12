import { configureStore } from "@reduxjs/toolkit";
import MenuStateReducer from './MenuOpenReducer';
import buttonClickReducer from "./ButtonClickReducer";
import categoryTagReducer from "./CategoryTagReducer";
import typeTagReducer from "./TypeTagReducer";
import DeviceTypeReducer from "./DeviceTypeReducer";

const store = configureStore({
    reducer: {
        MenuStateReducer: MenuStateReducer,
        buttonClicked: buttonClickReducer,
        categoryTag: categoryTagReducer,
        typeTag: typeTagReducer,
        deviceType: DeviceTypeReducer
    }
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;