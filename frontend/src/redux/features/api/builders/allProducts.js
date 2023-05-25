export default (builder,getAllProducts) => {
    builder.addCase(getAllProducts.pending, ( state,action ) => {
        state.isLoading = true;
    })
    
    builder.addCase(getAllProducts.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })

    builder.addCase(getAllProducts.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.allProducts = action.payload;
    })
}