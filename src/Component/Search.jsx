import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import {useEffect, useState} from "react"

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
 import {NavLink} from "react-router-dom"
import React from "react"
export function Search(){
    const search = useSelector(state=>state.productReducer.search)
  
  
    const [products,setProducts]  = useState([])
    const cart  = useSelector(state => state.productReducer.cart)

  let fetchProduct ;
  useEffect(()=>{
    fetchProduct = async()=>{
    const res = await axios.get(`https://dummyjson.com/products/category/${search}`)
  try{
setProducts(res.data.products)
  }  
  catch(error){
    console.log(error)
  }
  }
  fetchProduct()
  },[search])
const searchHandler =(e)=>{
e.preventDefault();

fetchProduct()
}
    return(
        <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-4 py-2 bg-white ">
          <NavLink className="flex items-center gap-2 font-semibold" href="#">
          
          <NavLink to="/" className="text-xl text-gray-800">ClosTich .</NavLink>
          </NavLink>
          <form className="flex-1 mx-4" onSubmit={searchHandler}>
            <div className="relative">
              <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-gray-500 " />
              <input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 p-2 rounded-md"
                placeholder="Search products..."
                type="search"
                value={search}
               
              />
             
            </div>
          </form>
          <NavLink to="/cart">
              <div className="relative">
                <div className="absolute top-0 left-3 h-5 w-5 flex items-center justify-center rounded-full  text-white text-xs font-bold bg-gray-800">
                  <h2>{cart.length}</h2>{" "}
                </div>

                <ShoppingCartOutlinedIcon className="text-gray-800" />
              </div>
            </NavLink>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            { 
          products.map(product =>(
                    <NavLink to= {`/product/${product.id}`} key={product.id} className="relative group rounded-md shadow-2xl duration-500 hover:scale-110">
               
                    
                    <img
                   
                      className="object-cover w-full h-60"
                      height={300}
                      src={product.thumbnail}
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="bg-white p-4 ">
                      <h3 className="font-semibold text-lg md:text-xl">{product.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
                      <h4 className="font-semibold text-base md:text-lg">${product.price}</h4>
                    </div>
                  </NavLink>
                ))
            }
          
           
           
          </div>
        </main>
        <footer className="flex items-center justify-center h-14 bg-white dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        </footer>
      </div>
    );
}