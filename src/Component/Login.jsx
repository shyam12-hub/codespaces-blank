import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const Login = () => {
  const [Visibile, setVisible] = useState(false);
 
  const navigate = useNavigate();
  function formSubmitHandeler(e) {
    e.preventDefault();
    navigate("/");
    toast.success("Logged in");
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-50 px-4 py-12">
  
      <section className="w-full max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h2 className="font-bold text-2xl mb-4 text-center">Get Log in</h2>
          <form
            aria-label="Login Form"
            className="space-y-4"
            onSubmit={formSubmitHandeler}
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email 
              </label>
              <input
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="mt-1 block w-full py-2 px-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                  id="password"
                  name="password"
                  required
                  type={Visibile ? "text" : "password"}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setVisible((prev) => !prev)}
                >
                  {!Visibile ? (
                    <VisibilityOffIcon className="w-4 h-4" />
                  ) : (
                    <VisibilityIcon className="w-4 h-4" />
                  )}
                </div>
              </div>
              <a
                className="text-sm text-black hover:text-black-600 hover:underline block mt-1"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  className="form-checkbox h-5 w-5 text-black-600"
                  type="checkbox"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Keep me signed in.
                </span>
              </label>
            </div>

 <button
             className="w-full  bg-black text-white border-2 border-black py-2 rounded duration-200 hover:bg-white hover:text-black "
            
            >
              Log in
            </button>
            
        
           
          </form>
           <button
           onClick={()=> navigate("/signup")}
              className="w-full mt-3 bg-black text-white border-2 border-black py-2 rounded duration-200 hover:bg-white hover:text-black "
            
            >
              Create an account
            </button>
        </div>
        <hr className="border-gray-200 my-2" />
      </section>
    </main>
  );
};