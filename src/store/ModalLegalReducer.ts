import { createSlice } from "@reduxjs/toolkit";

export type ModalLegalType = { isOpen: boolean, document: `terms` | `privacy` | `none` };

const initialState: ModalLegalType = { isOpen: false, document: `none` };

export const ModalLegalReducer = createSlice({
    name: `modal-legal`,
    initialState, 
    reducers: {
        setModalState: (state, action) => {
            state.isOpen = action.payload
        },
        setSelectedDocument: (state, action) => {
            state.document = action.payload
        }
    }
});

export const { setModalState, setSelectedDocument } = ModalLegalReducer.actions;

export default ModalLegalReducer.reducer;