import { configureStore } from "@reduxjs/toolkit";
import MenuStateReducer from './MenuOpenReducer';
import buttonClickReducer from "./ButtonClickReducer";
import categoryTagReducer from "./CategoryTagReducer";
import typeTagReducer from "./TypeTagReducer";
import DeviceTypeReducer from "./DeviceTypeReducer";
import FormSendReducer from "./FormSendReducer";
import ModalLegalReducer from "./ModalLegalReducer";

const store = configureStore({
    reducer: {
        MenuStateReducer: MenuStateReducer,
        buttonClicked: buttonClickReducer,
        categoryTag: categoryTagReducer,
        typeTag: typeTagReducer,
        deviceType: DeviceTypeReducer,
        formReducer: FormSendReducer,
        modalLegalReducer: ModalLegalReducer
    }
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;