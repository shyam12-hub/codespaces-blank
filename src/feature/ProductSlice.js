import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  isLoading: true, // Corrected typo here
  visible:false,
  login:false
};

export const fetchProduct = createAsyncThunk("fetchProduct", async()=>{
  try{
    const response = await axios.get("https://dummyjson.com/products");
    return response.data
  }
  catch(error){
    console.log(error)
  }
})

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers:{
setVisbible:(state,action)=>{
  state.visible=action.payload
},

setLogin:(state,action) =>{
  state.login = action.payload
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
export const {setVisbible,setLogin} = ProductSlice.actions
export default ProductSlice.reducer;
