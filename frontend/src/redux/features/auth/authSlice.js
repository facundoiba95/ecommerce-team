import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginBuilder from "./builders/LoginBuilder";
import RegisterBuilder from "./builders/RegisterBuilder";

const initialState = {
    error: null,
    isLoading:false,
    user:[],
}

export const handleLogin = createAsyncThunk(
    'auth/handleLogin',
    async () => {
        try {
            /*

                CODIGO PARA INICIAR SESION.
                SE ENVIAN DATOS AL BACKEND

            */
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
)

export const handleRegister = createAsyncThunk(
    'auth/handleRegister',
    async () => {
        try {
            /*

                CODIGO PARA REGISTRAR USUARIO.
                SE ENVIAN DATOS AL BACKEND

            */
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
)

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        LoginBuilder(builder,handleLogin)
        RegisterBuilder(builder,handleRegister)
    }
})

export default authSlice.reducer;