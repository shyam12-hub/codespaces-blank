import { useSelector ,useDispatch} from "react-redux";
import { Navbar } from "./Navbar";
import {setOrder} from "../feature/ProductSlice"
import {toast} from "react-hot-toast"
export function Cart() {
  const cart = useSelector((state) => state.productReducer.cart);
  const dispatch = useDispatch()
  const order = useSelector(state => state.productReducer.order)
  const totalPrice = cart.reduce((total,product) => total + product.product.price,0)
  const userData = useSelector(state => state.productReducer.userData)
function buy(){
  const {userAddress,userCity,userState,userPincode} = userData;
 
cart.map(cartProduct => dispatch(setOrder([...order,{product:cartProduct.product}])))
console.log(order)
if(!userAddress && !userCity && !userState && !userPincode) toast.error("Please add address first")
else
toast.success("orderPlaced")
}
  return (
    <div>
      <Navbar />
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
        <div>
          {cart.map((data) => (
            <div key={data.id} className="p-3 flex justify-between mt-4 items-center shadow-xl rounded-xl">
              <div className="p-4 flex flex-col gap-4">  
                <div>
                  <img src={data.product.images[2]} className="w-52 "  />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{data.product.title}</h2>
                
              </div>
              <h2 className="font-semibold text-xl text-red-500">${data.product.price}</h2>
            </div>
          ))}
        </div>
        <h2 className="text-center font-semibold text-gray-800"><span className="text-lg  " >Total amount </span> $ <span className="text-red-500">{totalPrice}</span></h2>
        <button className="text-white rounded-md p-3 w-[20%] mx-auto font-semibold bg-black border-2 border-black hover:text-black hover:bg-white " onClick={buy}>Buy Now</button>
      </div>
    </div>
  );
}
