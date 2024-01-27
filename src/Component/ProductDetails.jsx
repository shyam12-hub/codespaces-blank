import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setLogin } from "./feature/ProductSlice";
import toast from "react-hot-toast";
export function ProductDetails({ products }) {
  const login = useSelector((state) => state.productReducer.login);
  const dispatch  = useDispatch()
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [image, setImage] = useState(product.images[0]);
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="h-[20rem] w-[25rem] ">
              <img
                alt="Product image"
                className=" h-full w-full object-cover bg-gray-100 rounded-lg"
                height="600"
                src={image}
                width="600"
              />
            </div>

            <div className="flex justify-center gap-2">
              {product.images.map((image) => (
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
                onClick={()=>{
                  if(login){
                    toast.success("Added to cart")
                  }
                  else{
                    toast.error("Please login first")
                  }
                }}
                className="mt-4 bg-black w-[20rem] text-white p-2 rounded-xl font-bold duration-1000 hover:bg-white hover:text-black hover:border-2 border-black ">
                  Add to cart
                </button>
                <button 
                 onClick={()=>{
                  if(login){
                    toast.success("order placed")
                  }
                  else{
                    toast.error("Please login first")
                  }
                }}
                className="mt-4 bg-black w-[20rem] text-white p-2 rounded-xl font-bold duration-1000 hover:bg-white hover:text-black hover:border-2 border-black ">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}