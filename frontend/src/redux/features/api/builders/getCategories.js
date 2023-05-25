export default (builder,getAllCategories) => {
    builder.addCase(getAllCategories.pending, ( state,action ) => {
        state.isLoading = true;
    })
    
    builder.addCase(getAllCategories.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })

    builder.addCase(getAllCategories.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.categories = action.payload;
    })
}