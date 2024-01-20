import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  isLoading: false, // Corrected typo here
};

const options = {
  method: "GET",
  url: "https://real-time-product-search.p.rapidapi.com/search",
  params: {
    q: "Nike shoes",
    country: "us",
    language: "en",
  },
  headers: {
    "X-RapidAPI-Key": "db39858a17msh01e5f95254e7825p1051cajsnb2d8261f8cd2",
    "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
  },
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    // api call pending
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true; // Corrected typo here
    });

    // api call done
    builder.addCase(fetchProduct.fulfilled, (state, action) => (state.isLoading= false,state.products= action.payload) );

    // in error
    builder.addCase(fetchProduct.rejected, () => {
      console.log("error");
    });
  },
});

export default ProductSlice.reducer;