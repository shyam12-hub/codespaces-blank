import { UserInfo } from "./UserInfo";
import { Navbar } from "../Component/Navbar";
import { useState } from "react";
import {Order} from "./Oder"
export function ManageProfile() {
  const [data, setData] = useState("UserInfo");
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Navbar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))]  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 ">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Settings</h1>
        </div>
        <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
          <section className="text-sm text-gray-500  shadow-2xl h-[70vh] p-[2rem] rounded-xl flex  flex-col gap-5 cursor-pointer">
            <div className={`font-semibold ${data === "UserInfo" ? "text-gray-800" : "text-gray-400"}`  } onClick={()=> setData("UserInfo")}>
              Manage Profile
            </div>
            <div onClick={()=> setData('order')}className={`font-semibold ${data === "order" ? "text-gray-800" : "text-gray-400"}`  }>Orders</div>
          </section>
         {data === "UserInfo" ? <UserInfo /> : <Order/>}
        </div>
      </main>
    </div>
  );
}
