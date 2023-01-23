import { fecharModal } from "../functions/open-close-modals";
import { FormEvent, useState, useEffect } from "react";
import swal from "sweetalert";
import { api } from "../lib/axios";
import SNAP from "../assets/SNAP.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LoginModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginButtonPressed = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post(`/users/${username}`, {
        password: password,
      });
      localStorage.setItem("SavedJwtToken", response.data);
      localStorage.setItem("loggedUser", username);

      return router.push(
        {
          pathname: "/MyAccount",
          query: {
            tokenJWT: response.data,
          },
        },
        "/MyAccount"
      );
    } catch (err: any) {
      swal({
        title: `Ops!`,
        text: err.response.data,
        icon: "warning",
      });
    }
  };

  return (
    <div
      className="login fixed top-0 right-0 left-0 z-50 w-full h-full
     bg-black bg-opacity-90 outsideModal 
      hidden modal
     "
    >
      <div
        className="insideModal bg-bg_purple-500 opacity-1
        m-[1rem_10%] my_phone:m-[3rem_15%] 
        p-[3rem_1rem_3rem_1rem]
        rounded-3xl
        animate-modalEnter       
        
       "
      >
        <div className="mb-8 gap-4 text-center">
          <h1 className="text-3xl font-bold mb-4 break-all">Login</h1>
        </div>

        <div
          className="
        flex flex-col my_phone:grid my_phone:grid-cols-2
        gap-4
          text-center items-center "
        >
          <div className="">
            <Image src={SNAP} alt="SNAP logo" />
          </div>

          <div className="flex flex-col gap-8">
            <form
              onSubmit={loginButtonPressed}
              className=" flex flex-col gap-1 text-start"
            >
              <label className="text-xl my_phone:text-2xl" htmlFor="user ">
                Username
              </label>
              <input
                className="rounded-full pl-4 mb-2 w-full
                h-8
                bg-form_gray-800 placeholder-form_gray-500 text-form_gray-500
                 font-normal text-md"
                type="text"
                name="user"
                placeholder="User"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              ></input>

              <label className="text-xl my_phone:text-2xl" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-full pl-4 mb-2 w-full
                h-8
                bg-form_gray-800 placeholder-form_gray-500 text-form_gray-500
                "
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>

              <button
                type="submit"
                className="text-black font-bold 
                h-10 mt-4 rounded-xl bg-btn_blue-500
                transition duration-700 hover:bg-btn_blue-400 hover:scale-105
                text-2xl
                 "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
