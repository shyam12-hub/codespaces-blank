import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  isLoading: true, // Corrected typo here
  visible: false,
  login: true,
  userData: {
    userName: "",
    contact: "",
    email: "",
    password: "",
    userAddress: "",
    userCity: "",
    userState: "",
    userPincode: "",
  },
  order: [],
  cart: [],
  search: "",
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setVisbible: (state, action) => {
      state.visible = action.payload;
    },

    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (items) => items.product.id !== action.payload
      );
     
    },
     removeOrder:(state,action)=>{
        state.order = state.order.filter(
          (items) => items.product.id !== action.payload
        )
      }
  },
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
export const {
  setVisbible,
  setLogin,
  setUser,
  setOrder,
  setCart,
  setSearch,
  removeCart,
  removeOrder
} = ProductSlice.actions;
export default ProductSlice.reducer;
