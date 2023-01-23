import Decks from "../assets/Decks.svg";
import Friends from "../assets/Friends.svg";
import Home from "../assets/Home.svg";
import Play from "../assets/Play.svg";
import Collection from "../assets/Collection.svg";
import Logout from "../assets/Logout.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { abrirModal } from "../functions/open-close-modals";

export default function Side_nav() {
  const router = useRouter();

  const openMenu = () => {
    const menuBar = document.getElementsByClassName("menu-bar-expanded")[0];
    const menuBarReduced =
      document.getElementsByClassName("menu-bar-reduced")[0];

    if (menuBarReduced.innerHTML === "Open menu") {
      menuBarReduced.innerHTML = "Close menu";
      menuBar.classList.remove("hidden");
      menuBar.classList.add("flex", "flex-col");
    } else {
      menuBarReduced.innerHTML = "Open menu";
      menuBar.classList.add("hidden");
      menuBar.classList.remove("flex", "flex-col");
    }
    /* 
    menuBarReduced.innerHTML === "Open menu"
      ? (menuBarReduced.innerHTML = "Close menu")
      : (menuBarReduced.innerHTML = "Open menu"); */
  };
  return (
    <nav
      className=" flex flex-col  
      items-center
      gap-10
   bg-black opacity-80 my_phone:opacity-100
      rounded-r-3xl
     top-0 left-0 absolute my_phone:sticky
     
     h-fit 
     transition ease-in-out my_phone:h-screen duration-700
     p-2 my_phone:py-3 my_phone:px-4 
    text-xs my_phone:text-base
    w-50% my_phone:w-fit
    
     "
    >
      <button
        className="menu-bar-reduced my_phone:hidden
       
        "
        onClick={() => openMenu()}
      >
        Open menu
      </button>

      <div
        className="menu-bar-expanded
         hidden h-full
         my_phone:flex my_phone:flex-col my_phone:justify-evenly
            "
      >
        <button
          className="
      transition duration-700 hover:scale-125
      items-center flex flex-col justify-center
      "
          onClick={() =>
            router.push(
              {
                pathname: "/MyAccount",
                query: {
                  tokenJWT: localStorage.getItem("SavedJwtToken"),
                },
              },
              "/MyAccount"
            )
          }
        >
          <Image src={Home} alt="Home" width={40} />
          Home
        </button>
        <button
          className="
      transition duration-700 hover:scale-125
      items-center flex flex-col justify-center"
          onClick={() => router.push("/MyAccount/Collection")}
        >
          <Image src={Collection} alt="Collection" width={40} />
          Collection
        </button>
        <button
          className="
      transition duration-700 hover:scale-125
      items-center flex flex-col justify-center"
          onClick={() => router.push("/MyAccount/AllCards")}
        >
          <Image src={Decks} alt="AllCards" width={40} />
          All Cards
        </button>
        <button
          className="
      transition duration-700 hover:scale-125
      items-center flex flex-col justify-center"
          onClick={() => router.push("/MyAccount/Play")}
        >
          <Image src={Play} alt="Play" width={40} />
          Play
        </button>
        <button
          className="
      transition duration-700 hover:scale-125
      items-center flex flex-col justify-center"
          onClick={() => router.push("/MyAccount/Friends")}
        >
          <Image src={Friends} alt="Friends" width={40} />
          Friends
        </button>
        <button
          className="
      transition duration-700 hover:scale-125
      items-center flex flex-col justify-center"
          onClick={() => abrirModal("logOut")}
        >
          <Image src={Logout} alt="Logout" width={40} />
          Log-out
        </button>
      </div>
    </nav>
  );
}
