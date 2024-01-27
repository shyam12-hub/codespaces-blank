import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch, useSelector } from "react-redux";
import { setVisbible } from "../feature/ProductSlice";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import {NavLink} from "react-router-dom"
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
            <NavLink to="/login"><AccountCircleOutlinedIcon /></NavLink>

            <div><ShoppingCartOutlinedIcon /></div>
          </div>
        </div>
      </nav>
      {/* banner */}
     
      {/* category */}
    </div>
  );
}
