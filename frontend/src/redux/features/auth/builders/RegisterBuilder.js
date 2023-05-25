export default (builder,handleRegister) => {
    builder.addCase(handleRegister.pending, ( state,action ) => {
        state.isLoading = true;
    })

    builder.addCase(handleRegister.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLoading = false;
    })
    
    builder.addCase(handleRegister.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.user = action.payload;  // revisar que datos devuelve cuando se registra un usuario!
    })
}