import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { setLogin } from "../feature/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setUser } from "../feature/ProductSlice";
export const SignUp = () => {
  const [Visibile, setVisible] = useState(false);
  const [userData, setUserData] = useState(
    useSelector((state) => state.productReducer.userData)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function formSubmitHandeler(e) {
    e.preventDefault();
    navigate("/");
    toast.success("Logged in");
    dispatch(setLogin(true));
    dispatch(setUser(userData));
    console.log(userData);
    setUserData("");
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-50 px-4 py-12">
      <section className="w-full max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h2 className="font-bold text-2xl mb-4 text-center">Get Register</h2>
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
                Full Name
              </label>
              <input
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                id="uerName"
                name="usrName"
                required
                type="text"
                value={userData.userName}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, userName: e.target.value }))
                }
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="contact"
              >
                Contact no.
              </label>
              <input
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                id="contact"
                name="contact"
                required
                type="number"
                value={userData.contact}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, contact: e.target.value }))
                }
              />
            </div>
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
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
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
                  value={userData.password}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={(e) => setVisible((prev) => !prev)}
                >
                  {!Visibile ? (
                    <VisibilityOffIcon className="w-4 h-4" />
                  ) : (
                    <VisibilityIcon className="w-4 h-4" />
                  )}
                </div>
              </div>
            </div>

            <button className="w-full  bg-black text-white border-2 border-black py-2 rounded duration-200 hover:bg-white hover:text-black ">
              Sign Up
            </button>
          </form>
          <button
            onClick={() => navigate("/login")}
            className="w-full mt-4 bg-black text-white border-2 border-black py-2 rounded duration-200 hover:bg-white hover:text-black "
          >
            Log in
          </button>
        </div>
        <hr className="border-gray-200 my-2" />
      </section>
    </main>
  );
};
