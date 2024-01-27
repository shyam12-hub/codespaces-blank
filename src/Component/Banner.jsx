import banner from "../images/banner.png"
export function Banner(){
    return(
         <div className="flex flex-wrap gap-[2rem] p-5 justify-evenly items-center ">
        <div className="flex flex-col  font-bold">
 <div className="flex flex-col items-center font-san-serif  text-4xl mb-4 lg:text-6xl lg:mb-[3rem]"><span>Get Best Deals </span><span>And</span><span> Get it at Your home.</span></div>
    <button className="bg-black text-white px-4 py-2 rounded-md">Shop Know</button>
        </div>
      <div className=" h-[30rem] ">
           <img src={banner} className="h-full w-full object-cover" alt="Banner" />
      </div>
      
      </div>
    );
}