import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll to collapse the sidebar vertically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hover to expand the sidebar
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Determine if the sidebar should be collapsed
  const shouldCollapse = isCollapsed && !isHovered;

  return (
    <motion.div
      className="fixed top-0 left-0 bg-gray-900 text-white shadow-lg flex flex-col items-center"
      animate={{ height: shouldCollapse ? "4rem" : "100vh" }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "4rem" }} // Fixed width
    >
      <SideBarIcon
        icon={<GoHome size="28" />}
        text="Home"
        href="#home"
        showText={!shouldCollapse}
      />
      {!shouldCollapse && (
        <div className="flex flex-col items-center mt-4 space-y-2">
          <SideBarIcon icon={<RiContactsLine size="28" />} text="Contact" href="#contact" />
          <SideBarIcon icon={<SiAboutdotme size="28" />} text="About" href="#about" />
          <SideBarIcon icon={<GoProjectSymlink size="28" />} text="Projects" href="#projects" />
        </div>
      )}
    </motion.div>
  );
};

interface SideBarIconProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  showText?: boolean;
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, text, href, showText = true }) => (
  <a href={href} className="flex flex-col items-center group">
    <motion.div
      className="sidebar-icon"
      whileHover={{ scale: 1.1, backgroundColor: "#16a34a", color: "#fff" }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.div>
    {showText && (
      <span className="mt-1 text-xs text-gray-300 group-hover:text-white">{text}</span>
    )}
  </a>
);

export default SideBar;


