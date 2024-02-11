import {configureStore} from "@reduxjs/toolkit";
import menuShowReducer from './ShowMenuReducer';
import buttonClickReducer from "./ButtonClickReducer";
import categoryTagReducer from "./CategoryTagReducer";
import typeTagReducer from "./TypeTagReducer";
import DeviceTypeReducer from "./DeviceTypeReducer";

export default configureStore({
    reducer: {
        menuVisibility: menuShowReducer,
        buttonClicked: buttonClickReducer,
        categoryTag: categoryTagReducer,
        typeTag: typeTagReducer,
        deviceType: DeviceTypeReducer
    }
});