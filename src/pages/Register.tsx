import { fecharModal } from "../functions/open-close-modals";
import { FormEvent, useState, useEffect } from "react";
import swal from "sweetalert";
import { api } from "../lib/axios";

export default function RegisterModal() {
  const [newUsername, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/users", {
        username: newUsername,
        password: newPassword,
      });
      const apiResponse = response.data;
      return swal({
        title: `Congratulations ${newUsername}!`,
        text: "Your account has been successfully created",
        icon: "success",
      }).then(() => {
        setNewPassword("");
        setNewUserName("");
        fecharModal();
      });
    } catch (err: any) {
      console.log(err);
      swal({
        title: `Ops!`,
        text: err.response.data,
        icon: "warning",
      });
    }
  };

  /*   efeito para mudança de cores na senha do usuário */
  useEffect(() => {
    const changeColorToRed = (classOfDiv: string) => {
      const alvo = document.getElementsByClassName(classOfDiv)[0];
      alvo.classList.add("text-red-500");
      alvo.classList.remove("text-green-500");
    };
    const changeColorToGreen = (classOfDiv: string) => {
      const alvo = document.getElementsByClassName(classOfDiv)[0];
      alvo.classList.add("text-green-500");
      alvo.classList.remove("text-red-500");
    };
    const changeColorToNormal = (classOfDiv: string) => {
      const alvo = document.getElementsByClassName(classOfDiv)[0];
      alvo.classList.remove("text-green-500");
      alvo.classList.remove("text-red-500");
    };

    if (newPassword === "") {
      changeColorToNormal("8caracteres");
      changeColorToNormal("1numero");
      changeColorToNormal("letraMaiuscula");
      changeColorToNormal("confirmPassword");
    } else if (newPassword != "") {
      if (newPassword.length < 8) {
        changeColorToRed("8caracteres");
      } else if (newPassword.length >= 8) {
        changeColorToGreen("8caracteres");
      }

      const passwordSplit = newPassword.split("");
      if (passwordSplit.find(Number) === undefined) {
        changeColorToRed("1numero");
      } else {
        changeColorToGreen("1numero");
      }

      if (/[A-Z]/.test(newPassword) !== true) {
        changeColorToRed("letraMaiuscula");
      } else {
        changeColorToGreen("letraMaiuscula");
      }
    }

    const createAccountBtn = document.getElementsByClassName(
      "createAccount"
    )[0] as HTMLButtonElement;

    if (newPassword != "" && confirmPassword != newPassword) {
      changeColorToRed("confirmPassword");
      createAccountBtn.disabled = true;
    } else if (newPassword === "" && confirmPassword === "") {
      changeColorToNormal("confirmPassword");
      createAccountBtn.disabled = true;
    } else if (confirmPassword !== "" && confirmPassword === newPassword) {
      changeColorToGreen("confirmPassword");
      createAccountBtn.disabled = false;
    }
  }, [newPassword, confirmPassword]);

  return (
    <div
      className="register fixed top-0 right-0 left-0 z-50 w-full h-full
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
       "
      >
        <div className="flex flex-col items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold mb-4 break-all">Register</h1>
          <div
            className="
            text-center
          font-semibold text-xl
          hidden my_phone:block
          "
          >
            Create your unique username and password
          </div>
          <div className="hidden my_phone:block">
            Pay attention to the rules on the side when creating your password
          </div>
        </div>

        <div
          className="
        flex flex-col my_phone:grid my_phone:grid-cols-2
          text-center items-center "
        >
          <div className="flex flex-col">
            <h2 className="text-[1.5rem] font-bold mb-4 ">
              Your password must have
            </h2>
            <ul className="text-left ml-4 my_phone:ml-14 text-white list-disc">
              <li className="8caracteres">8 character</li>
              <li className="1numero">1 number</li>
              <li className="letraMaiuscula">1 capital letter</li>
              <li className="confirmPassword">Passwords matches</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <form
              onSubmit={sendSubmit}
              className=" flex flex-col gap-1 text-start"
            >
              <label htmlFor="user ">Username</label>
              <input
                className="rounded-full pl-4 mb-2 w-full
                h-8
                bg-form_gray-800 placeholder-form_gray-500 text-form_gray-500
                 font-normal text-md"
                type="text"
                name="user"
                placeholder="User"
                onChange={(e) => setNewUserName(e.target.value)}
                value={newUsername}
              ></input>

              <label htmlFor="pass word">Password</label>
              <input
                className="rounded-full pl-4 mb-2 w-full
                h-8
                bg-form_gray-800 placeholder-form_gray-500 text-form_gray-500
                "
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              ></input>

              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                className="rounded-full pl-4 mb-2 w-full h-8
                 bg-form_gray-800 placeholder-form_gray-500 text-form_gray-500
                "
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              ></input>

              <button
                type="submit"
                className="text-black font-bold 
                createAccount
                h-10 mt-4 rounded-xl bg-btn_blue-500
                transition duration-700 hover:bg-btn_blue-400 hover:scale-105
                disabled:bg-gray-500
                 "
                disabled
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
