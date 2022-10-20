import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: state => {
            state.modal = true;
        },
        closeModal: state => {
            state.modal = false;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export const stateOfModal = (state) => state.modal.modal;
export default modalSlice.reducer;