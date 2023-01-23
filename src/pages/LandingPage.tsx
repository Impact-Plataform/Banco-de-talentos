import Image from "next/image";
import Logo from "../assets/Logo.svg";
import { useEffect } from "react";
import { abrirModal, fecharModal } from "../functions/open-close-modals";
import LoginModal from "./Login";
import RegisterModal from "./Register";

export default function LandingPage() {
  const toggleModal = useEffect(() => {
    window.onclick = function (e) {
      const alvo = e.target as Element;
      alvo.classList.contains("outsideModal") ? fecharModal() : null;
      return;
    };
  });

  return (
    <section
      className="bg-[url('../assets/bgLandingPage.svg')] bg-cover bg-no-repeat bg-center
      h-screen 
        pt-10 md:pt-20 lg:pt-32
        flex flex-col gap-20 my_phone:gap-28
    "
    >
      <div className="flex flex-col gap-6 items-center text-center">
        <Image src={Logo} alt="Marvel Snap Logo" width={385} />
        <div className="font-bold text-lg my_phone:text-2xl">
          Manual deck tracker by <br /> Kinglele
        </div>
      </div>

      <div
        className="flex flex-col gap-5 md:gap-15 items-stretch justify-center
      text-xl md:text-3xl 
      mx-4 md:mx-4
      h-auto
      my_phone:flex-row break-all
      "
      >
        <button
          className="
          w-auto my_phone:w-72
         bg-btn_blue-500 
         transition duration-700 hover:bg-btn_blue-400 hover:scale-110 
            p-5 md:p-10
            rounded-full
            font-bold  text-black
        "
          onClick={() => abrirModal("register")}
        >
          Register
        </button>
        <button
          className="
          w-auto my_phone:w-72
         bg-btn_blue-500 
         transition duration-700 hover:bg-btn_blue-400 hover:scale-110 
         p-5 md:p-10
            rounded-full
            font-bold  text-black
        "
          onClick={() => abrirModal("login")}
        >
          Login
        </button>
      </div>

      <LoginModal />
      <RegisterModal />
    </section>
  );
}
/*  */
