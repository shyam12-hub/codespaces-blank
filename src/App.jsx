import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./feature/ProductSlice";

function App() {
  const loading = useSelector((state) => state.isLodding);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProduct());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // Log the values after the dispatch is completed
    console.log(loading);
  }, [dispatch, loading]); // Add dispatch and loading to the dependency array

  // Outside the useEffect, products will have the updated value
  const products = useSelector((state) => state.products);
console.log(products)
  return (
    <div>
      <h1>{loading ? "loading...." : "hello ji"}</h1>
    </div>
  );
}

export default App;
