import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuarioPermitido: false
};

const verificacionUsuarioSlice = createSlice({
    name: "usuarioPermitido",
    initialState,
    reducers: {
        permitir: state => {
            state.usuarioPermitido = true;
        },
        denegar: state => {
            state.usuarioPermitido = false;
        }
    }
});

export const { permitir, denegar } = verificacionUsuarioSlice.actions;
export const usuarioPermitidoState = (state) => state.usuarioVerificado.usuarioPermitido;
export default verificacionUsuarioSlice.reducer;