import { configureStore } from '@reduxjs/toolkit';
import usuarioVerificadoReducer from './usuarios/verificacionUsuarioSlice';

export const store = configureStore ({
    reducer: {
        usuarioVerificado: usuarioVerificadoReducer
    }
});