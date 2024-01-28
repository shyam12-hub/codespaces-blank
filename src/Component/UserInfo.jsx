import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { setUser } from "../feature/ProductSlice";
export function UserInfo() {
  const userData = useSelector((state) => state.productReducer.userData);
const [read,setRead] = useState(true)
const dispatch = useDispatch()
const [user,setUserData] = useState(userData)
  function edit(e){
    e.preventDefault()
    setRead(false)
    toast.success("edit now")
  }
  function save(e){
    e.preventDefault()
    setRead(true)
    toast.success("saved")
  }
  function profileHandeler(e){
e.preventDefault();
dispatch(setUser(user))
toast.success("Changes Occur")
console.log(user)
  }
  return (
    <div className=" shadow-2xl p-6 rounded-xl h-[70vh] overflow-y-scroll overflow-x-hidden">
  <h2>Manage Profile</h2>
      <form className="mt-6 flex flex-wrap gap-4 " onSubmit={profileHandeler}>
       {/* userName */}
       <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Full Name
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="uerName"
            name="usrName"
            type="text"
            required
            readOnly={read}
            value={user.userName}
           onChange={(e)=> setUserData((prev)=> ({...prev,userName:e.target.value}))}

          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
        </div>
        {/* mobile no */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="contact"
          >
          Contact no.
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="contact"
            name="contact"
            type="text"
            required
            readOnly={read}
            value={user.contact}
            onChange={(e)=> setUserData((prev)=> ({...prev,contact:e.target.value}))}
          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
        </div>
        {/* email */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="email"
            name="email"
            type="email"
            required
            readOnly={read}
            value={user.email}
            onChange={(e)=> setUserData((prev)=> ({...prev,email:e.target.value}))}
          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
        </div>
        {/* userAddress */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="userAddress"
          >
            Address
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="userAddress"
            name="userAddress"
            type="text"
            required
            readOnly={read}
            value={user.userAddress}
            onChange={(e)=> setUserData((prev)=> ({...prev,userAddress:e.target.value}))}
          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
        </div>
        {/* userState */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="userState"
          >
           State
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="userState"
            name="userState"
            type="text"
            required
            readOnly={read}
            value={user.userState}
            onChange={(e)=> setUserData((prev)=> ({...prev,userState:e.target.value}))}
          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
        </div>
        {/* userCity */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
         City
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="userCity"
            name="userCity"
            type="text"
            required
            readOnly={read}
            value={user.userCity}
            onChange={(e)=> setUserData((prev)=> ({...prev,userCity:e.target.value}))}
          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
        </div>
        {/* userPinCode */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="pinCode"
          >
            Pin Code
          </label>
          <input
            className="mt-1 block w-[16rem] py-2 px-3 border-2 bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            id="pinCode"
            name="pinCode"
            type="number"
            required
            readOnly={read}
            value={user.userPincode}
            onChange={(e)=> setUserData((prev)=> ({...prev,userPincode:e.target.value}))}
          />
          <div className="flex gap-3">
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={edit}>
              edit
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black " onClick={save}>
              Save
            </button>
          </div>
          <button className="bg-black text-white py-2 px-5 rounded-md mt-4 border-2 border-black hover:bg-white hover:text-black ">Save Profile</button>
        </div>
      </form>
    </div>
  );
}
