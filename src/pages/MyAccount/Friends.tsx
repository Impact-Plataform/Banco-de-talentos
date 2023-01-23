import Side_nav from "../../components/Side_nav";
import LogOutModel from "../Logout";
import underMaintenence from "../../assets/underMaintenence.png";
import Image from "next/image";

export default function Friends() {
  return (
    <section className="flex gap-2">
      <Side_nav />
      <LogOutModel />
      <div className="w-screen flex items-center justify-center">
        <Image
          src={underMaintenence}
          width={300}
          alt="page under construction"
        />
      </div>
    </section>
  );
}
