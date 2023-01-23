import { FormEvent, useState, useEffect } from "react";
import { fecharModal } from "../functions/open-close-modals";
import Agents from "../assets/Agents.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LogOutModel() {
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("SavedJwtToken");
    return router.push("/LandingPage");
  };

  return (
    <section
      className="logOut fixed top-0 right-0 left-0 z-50 w-full h-full
     bg-black bg-opacity-90 outsideModal 
      hidden modal
     "
    >
      <div
        className="insideModal bg-bg_purple-500 opacity-1
        m-[1rem_10%] my_phone:m-[7rem_15%] 
        p-[3rem_1rem_3rem_1rem]
        rounded-3xl
        animate-modalEnter 
        flex flex-col gap-8      
        
       "
      >
        <h1 className="text-3xl font-bold mb-4 break-all text-center">
          Log-out
        </h1>
        <div className="text-2xl text-center">
          Are you sure you want to quit?
        </div>

        <div className="flex gap-8 w-full">
          <button
            className="text-black font-bold 
                h-16 mt-4 rounded-xl bg-gray-500
                transition duration-700 hover:bg-gray-400 hover:scale-105
                text-2xl
                w-full
                 "
            onClick={() => logOut()}
          >
            Log-out
          </button>
          <button
            className="text-black font-bold 
                h-16 mt-4 rounded-xl bg-btn_blue-500
                transition duration-700 hover:bg-btn_blue-400 hover:scale-105
                text-2xl
                w-full
                 "
            onClick={() => fecharModal()}
          >
            Stay
          </button>
        </div>
      </div>
    </section>
  );
}
