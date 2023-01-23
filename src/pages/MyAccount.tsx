import Image from "next/image";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Side_nav from "../components/Side_nav";
import { api } from "../lib/axios";
import BabyGroot from "../assets/BabyGroot.svg";
import ThannosAndTesseract from "../assets/ThannosAndTesseract.svg";
import VariousHeros from "../assets/VariousHeros.svg";
import HeroJump from "../assets/HeroJump.svg";
import LogOutModel from "./Logout";

export default function MyAccount() {
  const router = useRouter();
  const userTokenJWT = router.query.tokenJWT as string;

  const [username, setUsername] = useState("");

  useEffect((): any => {
    if (!router.isReady) return;

    const getAccountInfos = async () => {
      if (!userTokenJWT) {
        router.push("/LandingPage");
      }

      const userAccount = await api.get(`/accounts/me`, {
        headers: {
          Authorization: `Bearer ${userTokenJWT}`,
        },
      });
      setUsername(userAccount.data.username);
    };
    getAccountInfos();
  }, [router.isReady]);

  return (
    <section className="flex gap-2">
      <Side_nav />
      <main
        className="flex flex-col
        w-screen items-center
        py-8
      "
      >
        <h1 className="text-3xl font-bold mb-4 break-all">
          Welcome, {username}
        </h1>
        <div className="text-2xl">What you'll gonna do today?</div>

        <nav
          className="flex flex-col gap-5 sm:grid grid-cols-2 sm:gap-10
            h-full flex-wrap
            px-5
            text-center content-center"
        >
          <button
            className=" transition duration-700 hover:scale-105
            my_phone:text-xl
          "
            onClick={() => router.push("/MyAccount/Collection")}
          >
            <div>My Collection</div>
            <Image width={300} src={BabyGroot} alt="Go to my Collection" />
          </button>
          <button
            className=" transition duration-700 hover:scale-105
            my_phone:text-xl
         "
            onClick={() => router.push("/MyAccount/AllCards")}
          >
            <div>All Cards</div>
            <Image
              width={300}
              src={ThannosAndTesseract}
              alt="Go to all Cards"
            />
          </button>
          <button
            className=" transition duration-700 hover:scale-105
            my_phone:text-xl
         "
            onClick={() => router.push("/MyAccount/Friends")}
          >
            <div>Gossip friends</div>
            <Image width={300} src={VariousHeros} alt="Go to Friends" />
          </button>
          <button
            className=" transition duration-700 hover:scale-105
            my_phone:text-xl
         "
            onClick={() => router.push("/MyAccount/Play")}
          >
            <div>It's snap time!</div>
            <Image width={300} src={HeroJump} alt="Go to Play" />
          </button>
        </nav>
      </main>
      <LogOutModel />
    </section>
  );
}
