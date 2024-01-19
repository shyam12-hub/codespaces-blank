import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  isLodding: false,
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
  extraReducers: (bulider) => {
    // api call pending
    bulider.addCase(fetchProduct.pending, (state) => {
      state.isLodding = true;
    });
    // api call done
    bulider.addCase(fetchProduct.fulfilled, (state, action) => {
      (state.products = action.payload), (state.isLodding = false);
    });

    // in error

    bulider.addCase(fetchProduct.rejected, () => {
      console.log("error");
    });
  },
});

export default ProductSlice.reducer;
