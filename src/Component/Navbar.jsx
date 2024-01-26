import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import { setVisbible } from "../feature/ProductSlice";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import banner from "../images/banner.png"
export function Navbar() {
  const visible = useSelector((state) => state.productReducer.visible);
  const dispatch = useDispatch();
  const menu = ["Fashion", "Accessories", "Conatct Us", "About US"];

  return (
    <div>
      {/* navbar */}
      <nav className="flex justify-between  h-16 items-center sticky  top-0 bg-white  ">
        <div className="text-center order-2 lg:order-1 text-3xl font-bold ml-[6rem] lg:ml-4 lg:mt-4">ClosTich.</div>
        <div className="relative order-1  lg:order-2 ">
          <div className="  lg:hidden">
            <MenuRoundedIcon
              onClick={() => (
                dispatch(setVisbible(true)), console.log(visible)
              )}
            />
          </div>
          <div
            className={`${
              visible ? "scale-x-[1] " : "scale-x-[0]"
            } lg:scale-x-[1] duration-100`}
          >
            <CloseRoundedIcon
              className="absolute top-[-1.6rem] z-10 left-[15rem] lg:invisible"
              onClick={() => dispatch(setVisbible(false))}
            />
            <div
              className={` absolute z-0 left-0 p-4 top-[-2.8rem] bg-white  h-[100vh] w-[18rem]  lg:top-[-1rem] lg:p-3 lg:w-[25rem] lg:h-16 lg:bg-transparent`}
            >
              <ul className="flex gap-4 flex-col  lg:flex-row ">
                {menu.map((menu) => (
                  <li className="text-lg font-bold">{menu}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="order-3">
          <div className="flex gap-3 p-2 text-3xl font-bold">
            <div><SearchRoundedIcon /></div>
            <div><AccountCircleOutlinedIcon /></div>

            <div><ShoppingCartOutlinedIcon /></div>
          </div>
        </div>
      </nav>
      {/* banner */}
      <div className="flex flex-wrap gap-[2rem] p-5 justify-around items-center text-center">
        <div className="flex flex-col  font-bold">
 <div className="flex flex-col items-center font-san-serif  text-4xl mb-4 lg:text-6xl lg:mb-[3rem]"><span>Get Best Deals </span><span>And</span><span> Get it at Your home.</span></div>
    <button className="bg-black text-white px-4 py-2 rounded-md">Shop Know</button>
        </div>
      <div className=" h-[30rem] ">
           <img src={banner} className="h-full w-full object-cover" alt="Banner" />
      </div>
      
      </div>
      {/* category */}
    </div>
  );
}
