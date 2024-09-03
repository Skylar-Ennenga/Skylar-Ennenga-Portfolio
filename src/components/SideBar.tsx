import React from "react";
import { GoHome } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";

const SideBar = () => {
  return (

    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <a href="#home">
        <SideBarIcon icon={<GoHome size="28" />} text={"Home"} />
      </a>
      <a href="#contact">
        <SideBarIcon icon={<RiContactsLine size="28" />} text={"Contact"} />
      </a>
      <a href="#about">
        <SideBarIcon icon={<SiAboutdotme size="28" />} text={"About"} />
      </a>
      <a href="#projects">
        <SideBarIcon icon={<GoProjectSymlink size="28" />} text={"Projects"} />
      </a>
    </div>

  );
};

const SideBarIcon = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

export default SideBar; 
