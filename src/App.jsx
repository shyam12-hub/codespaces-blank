import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./feature/ProductSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoading);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProduct());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>{loading ? "Loading...." : "Hello ji"}</h1>
      
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
