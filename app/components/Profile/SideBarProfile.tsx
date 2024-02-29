import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "../../../public/assests/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  
  const abrirLinkEmNovaAba = (url: string) => {
    window.open(url, '_blank');
  };

  console.log('this is the role',user)
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-slate-800 bg-slate-200" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user.avatar || avatar ? user.avatar.url || avatar : avatarDefault
          }
          alt=""
          width={20}
          height={20}
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
         Minha conta
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-slate-800 bg-slate-200" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} className="dark:text-white text-black"  />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
         Alterar a senha
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-slate-200" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} className="dark:text-white text-black"  />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Cursos Inscritos
        </h5>
      </div>
        <Link
          className={`w-full flex items-center px-3 py-4 cursor-pointer ${
            active === 6 ? "dark:bg-slate-800 bg-slate-200" : "bg-transparent"
          }`}
          href={"https://chat.whatsapp.com/JW5BFeI6KDIIqzS95Y4Yqj"}
          onClick={(e) => {
            e.preventDefault(); // Impede o comportamento padrão de navegação
            abrirLinkEmNovaAba("https://chat.whatsapp.com/JW5BFeI6KDIIqzS95Y4Yqj");
          }}
        >
          <FaWhatsapp size={20} className="dark:text-white text-black"  />
          <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
            Grupo Chat
          </h5>
        </Link>
      {user.role === "admin" && (
        <Link
          className={`w-full flex items-center px-3 py-4 cursor-pointer ${
            active === 6 ? "dark:bg-slate-800 bg-slate-200" : "bg-transparent"
          }`}
          href={"/admin"}
        >
          <MdOutlineAdminPanelSettings size={20} className="dark:text-white text-black"  />
          <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
            Admin Dashboard
          </h5>
        </Link>
      )}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 4 ? "dark:bg-slate-800 bg-slate-200" : "bg-transparent"
        }`}
        onClick={() => logOutHandler()}
      >
        <AiOutlineLogout size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          Sair
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
