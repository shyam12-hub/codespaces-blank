import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./feature/ProductSlice";
import { Home } from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Component/Login";
import { ProductDetails } from "./Component/ProductDetails";
import { SignUp } from "./Component/SignUp";
import { ManageProfile } from "./Component/MangeProfile";
import {Cart} from "./Component/Cart"
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchProduct());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const products = [
    {
      id: 0,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 2,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 3,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 4,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 5,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 6,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
  ];
  const visible = useSelector((state) => state.productReducer.visible);
  return (
    <div
      className={`w-full h-[100vh] m-0 p-0 box-border  ${
        visible ? "bg-gray-400" : "bg-white"
      } `}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/manageProfile" element={<ManageProfile />} />
<Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
