import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import usuarioVerificadoReducer from './usuarios/verificacionUsuarioSlice';

export const store = configureStore ({
    reducer: {
        modal: modalReducer,
        usuarioVerificado: usuarioVerificadoReducer
    }
});