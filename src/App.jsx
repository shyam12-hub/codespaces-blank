import { useDispatch, useSelector } from "react-redux";;
import { useEffect } from "react";
import { fetchProduct } from "./feature/ProductSlice";
function App(){
  const dispatch = useDispatch()
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.isLoading)
  useEffect(()=>{
const fetchData = async ()=>{
  try{
    dispatch(fetchProduct());
console.log(products)
  }
  catch(error){
    console.log(error)
  }
}
fetchData()
  },[])
  return(
<div>{loading ? "loading...": "hello ji"}</div>
  );
}
export default App;