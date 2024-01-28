import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./feature/ProductSlice";
import { Home } from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Component/Login";
import { ProductDetails } from "./Component/ProductDetails";
import { SignUp } from "./Component/SignUp";
import { ManageProfile } from "./Component/MangeProfile";
import { Cart } from "./Component/Cart";
import { Search } from "./Component/Search";
function App() {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.productReducer.visible);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchProduct({search:""}));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const products = useSelector((state) => state.productReducer.products);

  if (!products || !products.products) {
    // If products or products array is not available yet, you can render a loading state or return null
    return;
  }

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
          element={<ProductDetails products={products.products} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/manageProfile" element={<ManageProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
