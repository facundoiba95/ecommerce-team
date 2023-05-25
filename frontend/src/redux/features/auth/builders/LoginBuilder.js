export default (builder,handleLogin) => {
    builder.addCase(handleLogin.pending, ( state,action ) => {
        state.isLoading = true;
    })

    builder.addCase(handleLogin.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLoading = false;
    })
    
    builder.addCase(handleLogin.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.user = action.payload;
    })
}