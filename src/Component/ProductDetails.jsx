import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrder } from "../feature/ProductSlice";
import toast from "react-hot-toast";
import { setCart } from "../feature/ProductSlice";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
export function ProductDetails({ products }) {
  const login = useSelector((state) => state.productReducer.login);
  const order = useSelector((state) => state.productReducer.order);
  const cart = useSelector((state) => state.productReducer.cart);
  const { userAddress, userCity, userPincode, contact, userState } =
    useSelector((state) => state.productReducer.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const userData = useSelector((state) => state.productReducer.userData);
  const [image, setImage] = useState(product.thumbnail);

  function Buy() {
    if (!login) toast.error("plese login first");
  }
  function isOrder(e) {
    e.preventDefault();
    // checking order is an array or not
    // Array.isArray(order)
    const { userAddress, userCity, userState, userPincode } = userData;
    const updatedOrder = Array.isArray(order)
      ? [...order, { product }]
      : [{ product }];
    if (login) {
      if (userAddress && userCity && userState && userPincode) {
        toast.success("Order Conferm");
        dispatch(setOrder(updatedOrder));
      }
    }
    if (login) {
      if (!userAddress && !userCity && !userState && !userPincode)
        toast.error("Please add address first");
    }
  }

  function addCart() {
    const Updatecart = Array.isArray(cart)
      ? [...cart, { product }]
      : [{ cart }];
    if (login) {
      toast.success("Added to cart");
      dispatch(setCart(Updatecart));
    } else {
      toast.error("Please login first");
    }
  }
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="h-auto w-[25rem] ">
              <img
                alt="Product image"
                className=" h-full w-full object-cover bg-gray-100 rounded-lg"
                height="600"
                src={image}
                width="600"
              />
            </div>

            <div className="flex justify-center gap-2">
              {product.images &&
                product.images.map((image) => (
                  <img
                    alt="Product image thumbnail"
                    className="h-16 w-16 object-cover bg-gray-100 rounded-lg"
                    height="50"
                    src={image}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                    onClick={() => setImage(image)}
                  />
                ))}
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            <div className="space-y-1">
              <p className="text-gray-900">{product.description}</p>
            </div>
            <div className="flex items-center"></div>
            <div className="mt-8 ">
              <div className="flex items-center ">
                <h2 className="text-lg font-semibold text-gray-900 ">Price</h2>
                <p className="ml-2 text-lg text-gray-900">${product.price}</p>
              </div>
              <div className="flex gap-[2rem] flex-col justify-center items-center w-full lg:flex-row">
                <button
                  onClick={addCart}
                  className="mt-4 bg-black w-[20rem] border-2 border-black text-white p-2 rounded-xl font-bold duration-100 hover:bg-white hover:text-black  "
                >
                  Add to cart
                </button>
                <button onClick={Buy}>
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
                        <div className=" max-w-[25rem] mx-auto">
                          <img src={product.thumbnail} />
                        </div>
                        <div className="text-center font-bold text-red-600 text-xl">
                          ${product.price}
                        </div>
                        <div className="font-italic text-center text-lg text-gray-700">
                          <h1>{contact}</h1>
                          <h1>{userAddress}</h1>
                          <h1>{userPincode}</h1>
                          <h1>{userCity}</h1>
                          <h1>{userState}</h1>
                        </div>
                      </SheetHeader>

                      <SheetFooter>
                        <SheetClose asChild>
                          <button
                            onClick={isOrder}
                            className="mt-4 bg-black w-[20rem] border-2 border-black text-white p-2 rounded-xl font-bold duration-100 hover:bg-white hover:text-black  "
                          >
                            Order now
                          </button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
