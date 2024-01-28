import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Category } from "./Category";
import Product from "./Product"
import {Banner} from "./Banner"

export function Home(){
    const visible = useSelector(state => state.productReducer.visible)
    const loading = useSelector(state => state.productReducer.isLoading)

    return(
        <div className={`h-[100vh] w-full overflow-x-hidden  ${visible ? "bg-gray-400" :"bg-white"}` }>
           <Navbar/>
           {
loading ? <img src={loading}/> : <><Banner/>
<Category/></>
           }
           
<Product/>
        </div>
    );
}
