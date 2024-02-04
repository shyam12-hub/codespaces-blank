import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "./Navbar";
import { setOrder } from "../feature/ProductSlice";
import { toast } from "react-hot-toast";
import { removeCart } from "../feature/ProductSlice";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
export function Cart() {
  const cart = useSelector((state) => state.productReducer.cart);

  const dispatch = useDispatch();
  const order = useSelector((state) => state.productReducer.order);
  const totalPrice = cart.reduce(
    (total, product) => total + product.product.price,
    0
  );
  const userData = useSelector((state) => state.productReducer.userData);
  const { userAddress, userCity, userState, userPincode, contact } = userData;
  function buy() {
    cart.map((cartProduct) =>
      dispatch(setOrder([...order, { product: cartProduct.product }]))
    );
    console.log(order);
    if (!userAddress && !userCity && !userState && !userPincode)
      toast.error("Please add address first");
    else toast.success("orderPlaced");
  }

  return (
    <div>
      <Navbar />
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
        <div>
          {cart.length === 0 ? (
            <h2 className="text-center text-2xl font-semibold text-gray-700 ">
              No product Yet
            </h2>
          ) : (
            cart.map((data) => (
              <div
                key={data.product.id}
                className="flex flex-col gap-3 shadow-xl rounded-xl"
              >
                <div className="p-3 flex justify-between mt-4 items-center ">
                  <div className="p-4 flex flex-col gap-4">
                    <div>
                      <img src={data.product.images[2]} className="w-52 " />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {data.product.title}
                    </h2>
                  </div>
                  <h2 className="font-semibold text-xl text-red-500">
                    ${data.product.price}
                  </h2>
                </div>
                <button
                  onClick={() => dispatch(removeCart(data.product.id))}
                  className="mb-4 bg-red-500 mx-auto w-[20rem] border-2 border-red-500 text-white p-2 rounded-xl font-bold hover:bg-white hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <h2 className="text-center font-semibold text-gray-800">
          <span className="text-lg  ">Total amount </span> ${" "}
          <span className="text-red-500">{totalPrice}</span>
        </h2>
        <button>
          {cart.length > 0 && (
            <Sheet className="bg-white">
              <SheetTrigger asChild>
                <button className="mt-4 bg-black w-[20rem] border-2 border-black text-white p-2 rounded-xl font-bold duration-100 hover:bg-white hover:text-black  ">
                  Order now
                </button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle className="text-2xl text-center font-semibold text-gray-800">
                    Check Out
                  </SheetTitle>
                  {cart.map((product) => (
                    <div key={product.id}>
                      <div className=" max-w-[25rem] mx-auto">
                        <img src={product.product.thumbnail} />
                      </div>
                      <div className="text-center font-bold text-red-600 text-xl">
                        ${product.product.price}
                      </div>
                      <div className="font-italic text-center text-lg text-gray-700">
                        <h1>{contact}</h1>
                        <h1>{userAddress}</h1>
                        <h1>{userPincode}</h1>
                        <h1>{userCity}</h1>
                        <h1>{userState}</h1>
                      </div>
                    </div>
                  ))}
                </SheetHeader>

                <SheetFooter>
                  <SheetClose asChild>
                    <button
                      onClick={buy}
                      className="mt-4 bg-black w-[20rem] border-2 border-black text-white p-2 rounded-xl font-bold duration-100 hover:bg-white hover:text-black  "
                    >
                      Order now
                    </button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          )}
        </button>
      </div>
    </div>
  );
}
