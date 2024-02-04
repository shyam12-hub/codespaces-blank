import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { setUser } from "../feature/ProductSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
export function UserInfo() {
  const userData = useSelector((state) => state.productReducer.userData);


const dispatch = useDispatch()
const [user,setUserData] = useState(userData)
const {userName,contact,email,userAddress,userCity,userPincode,userState} = user

  function profileHandeler(e){
e.preventDefault();
dispatch(setUser(user))
toast.success("Changes Occur")
console.log(user)
  }
  return (
    <div className=" shadow-2xl p-6 rounded-xl h-[70vh] overflow-y-scroll overflow-x-hidden">
  <h2 className="text-xl font-semibold text-gray-700">Manage Profile</h2>
 <div className="flex flex-col gap-3 ">
  <div>
    <h2 className="text-gray-700">User Name</h2>
    <h2 className="italic text-gray-600">{userName}</h2>
  </div>
  <div>
    <h2 className="text-gray-700">Contact no.</h2>
    <h2 className="italic text-gray-600">{contact}</h2>
  </div>
  <div  className="text-gray-700">
    <h2>Email id.</h2>
    <h2 className=" text-gray-600">{email}</h2>
  </div>
  <div className="flex flex-col gap-2 italic text-gray-600">
    <h2>{userAddress}</h2>
    <h2>{userPincode}</h2>
    <h2>{userCity}</h2>
    <h2>{userState}</h2>
    </div>
 </div>
 <Dialog>
      <DialogTrigger asChild>
        <button onClick={()=> toast.success("Edit now")} className="mt-4 bg-black w-[15rem] border-2 border-black text-white p-2 rounded-xl font-bold duration-100 hover:bg-white hover:text-black  ">Edit Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          
        </DialogHeader>
        <div className="flex flex-col gap-3 p-2 justify-center items-center">
          {/* username */}
          <div className="flex gap-4 ">
            <label htmlFor="userName" className="text-right">
              User Name
            </label>
            <input id="userName"  className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700" value={userName} onChange={(e)=> setUserData({...user,userName:e.target.value})} />
          </div>
          {/* contact */}
          <div className="flex gap-4">
            <label htmlFor="contact" className="text-right">
              Contact no.
            </label>
            <input id="contact" value={contact} className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700" onChange={(e)=> setUserData({...user,contact:e.target.value})}/>
          </div>
          {/* email */}
          <div className="flex gap-9">
            <label htmlFor="email" className="text-right">
        Email id.
            </label>
            <input id="email" value={email} className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700" readOnly onClick={()=> toast.error("Can't change email id")} />
          </div>
          {/* userAddress */}
          <div className="flex gap-2">
            <label htmlFor="userAddress" className="text-right">
              User address
            </label>
            <input id="userAddress" value={userAddress} className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700" onChange={(e)=> setUserData({...user,userAddress:e.target.value})}/>
          </div>
          {/* pinCode */}
          <div className="flex gap-9">
            <label htmlFor="userPincode" className="text-right">
             Pin Code
            </label>
            <input id="userPincode" value={userPincode} className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700"  onChange={(e)=> setUserData({...user,userPincode:e.target.value})}/>
          </div>
          {/* user City */}
          <div className="flex gap-16">
            <label htmlFor="userCity" className="text-right">
             City
            </label>
            <input id="userCity" value={userCity} className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700"  onChange={(e)=> setUserData({...user,userCity:e.target.value})}/>
          </div>
          {/* user state */}
          <div className="flex gap-14">
            <label htmlFor="userState" className="text-right">
           State
            </label>
            <input id="userState" value={userState} className=" border p-1 font-semibold text-gray-600 border-gray-600 rounded-md focus:border-gray-700" onChange={(e)=> setUserData({...user,userState:e.target.value})}/>
          </div>
        </div>
        
        <DialogFooter>
          <button onClick={profileHandeler} className="mt-4 bg-black w-[15rem] border-2 border-black text-white p-2 rounded-xl font-bold duration-100 hover:bg-white hover:text-black  ">Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  );
}
