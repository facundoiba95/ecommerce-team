import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allProducts from "./builders/allProducts";
import getCategories from "./builders/getCategories";
import productsOfCategory from "./builders/productsOfCategory";

const initialState = {
    isLoading: false,
    error:null,
    allProducts:[],
    categories:[],
    productsOfCategory:[]
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        try {
            const req = await fetch('https://dummyjson.com/products')
            const res = await req.json();
            return res.products;
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
)

export const getAllCategories = createAsyncThunk(
    'products/getCategories',
    async () => {
        try {
            const req = await fetch('https://dummyjson.com/products/categories');
            const res = await req.json();
            return res;
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
)

export const getProductsOfCategory = createAsyncThunk(
    'products/getProductsOfCategory',
    async (category) => {
        try {
            const req = await fetch(`https://dummyjson.com/products/category/${category}`);
            const res = await req.json();
            return res.products;
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }
)

export const productsSlice = createSlice({
    name:'productsSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        allProducts(builder,getAllProducts)
        getCategories(builder,getAllCategories)
        productsOfCategory(builder,getProductsOfCategory)
    }
})

export default productsSlice.reducer;