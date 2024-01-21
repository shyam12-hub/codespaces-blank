import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  isLoading: false, // Corrected typo here
};

export const fetchProduct = createAsyncThunk("fetchProduct", async()=>{
  try{
    const response = await axios.request("https://dummyjson.com/");
    return response.data
  }
  catch(error){
    console.log(error)
  }
})

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    // api call pending
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true; // Corrected typo here
    });

    // api call done
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    // in error
    builder.addCase(fetchProduct.rejected, () => {
      console.log("error");
    });
  },
});

export default ProductSlice.reducer;
