import { configureStore } from "@reduxjs/toolkit";
import MenuStateReducer from './MenuOpenReducer';
import DeviceTypeReducer from "./DeviceTypeReducer";
import FormSendReducer from "./FormSendReducer";
import ModalLegalReducer from "./ModalLegalReducer";
import MobilePositionReducer from "./MobileMenuPositionReducer";

const store = configureStore({
    reducer: {
        MenuStateReducer: MenuStateReducer,
        deviceType: DeviceTypeReducer,
        formReducer: FormSendReducer,
        modalLegalReducer: ModalLegalReducer,
        mobilePositionReducer: MobilePositionReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
    }),
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;