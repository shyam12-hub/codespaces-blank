import {useSelector} from "react-redux"
export function Order(){
    const order = useSelector(state => state.productReducer.order)
    const userData = useSelector(state => state.productReducer.userData)
    return(
<div className="p-3 overflow-y-scroll flex flex-col gap-4 h-[70vh] ">
   {
    order.map((orderData)=>(
        <div key={orderData.product.id} className="shadow-2xl rounded-xl p-5">
            <div className="h-[5rem] w-[4rem]"><img src={orderData.product.images[2]} className="h-full w-full object-cover"/></div>
           
           <div className="flex flex-col gap-2">
           <div className="text-lg font-bold text-gray-800">{orderData.product.title}</div>
            <div className="text-lg text-red-500 font-bold">${orderData.product.price}</div>
            <div className="text-gray-800">{userData.contact}</div>
            <div className="text-gray-800">{userData.userAddress}</div>
            <div className="text-gray-800">{userData.userPincode}</div>
<div className="text-gray-800">{userData.userCity}</div>
<div className="text-gray-800">{userData.userState}</div></div> 

        </div>
    ))
   }
</div>
    )
}