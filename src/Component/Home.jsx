import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Category } from "./Category";
import Product from "./Product"
function Home(){
    const visible = useSelector(state => state.productReducer.visible)
    return(
        <div className={`h-[100vh] w-full grid ${visible ? "bg-gray-400" :"bg-white"}` }>
           <Navbar/>
           <Category/>
<Product/>
        </div>
    );
}
export default Home;