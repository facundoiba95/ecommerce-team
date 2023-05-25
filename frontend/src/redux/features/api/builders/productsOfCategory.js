export default (builder,getProductsOfCategory) => {
    builder.addCase(getProductsOfCategory.pending, ( state,action ) => {
        state.isLoading = true;
    })
    
    builder.addCase(getProductsOfCategory.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })

    builder.addCase(getProductsOfCategory.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.productsOfCategory = action.payload;
    })
}