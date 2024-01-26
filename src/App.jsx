import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./feature/ProductSlice";
import { Routes ,Route} from "react-router-dom";

import Home from "./Component/Home"
function App() {
  const dispatch = useDispatch();

// const products = useSelector(state => state.productReducer.products)
// const loading = useSelector(state => state.productReducer.isLoading)
  useEffect(() => {
    const fetchData = async () => {
      try {
       dispatch(fetchProduct());
       console.log(products)
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch.loading]);


  return (
    <div className="overflow-y-auto overflow-x-hidden box-border m-0 p-0 font-[Jost, Arial, Helvetica, sans-serif]">
  {/* <h2>{loading && "Loading"}</h2> */}

<div>
  {/* {
    products.products.map(data => 
      <div key={data.id}>
        <h2>{data.title}</h2>
      </div>)
  } */}

  <Routes>
    <Route path="/" element={<Home/>}/> 
  </Routes>
</div>
    </div>
  );
}

export default App;
