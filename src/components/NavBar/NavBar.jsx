import React, { useContext } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import SideBar from "./Sidebar";
import { Contexts } from "../../context";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
  const { light, toggleTheme } = useContext(Contexts);

  return (
    <nav className="navbar h-[100px] relative">
      <SideBar />
      <div className="wrapper h-full w-3/4 m-auto flex items-center justify-between">
        <motion.span
          className="text-4xl italic font-thin"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PR
        </motion.span>
        <motion.div
          className="links flex gap-5 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/pulkit-raina-0b18881ab/"
            target="_blank"
          >
            <img src="/linkedin.png" className="h-6 w-7" />
          </a>
          <a href="https://www.codechef.com/users/sanatanify" target="_blank">
            <img src="/codechef.png" className="h-6 w-12" />
          </a>
          <a href="https://codeforces.com/profile/raina-pulkit" target="_blank">
            <img src="/codeforces.png" className="h-6 w-6" />
          </a>
          <a href="https://leetcode.com/pulkitraina2608/" target="_blank">
            <img src="/leetcode.png" className="h-6 w-5" />
          </a>
          <a href="mailto:pulkitraina2608@gmail.com" target="_blank">
            <img src="/gmail.png" className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
      <button
        className="fixed right-10 top-12 translate-y-[-50%] z-50"
        onClick={toggleTheme}
      >
        {light ? <MdDarkMode size={30} /> : <MdOutlineLightMode size={30} />}
      </button>
    </nav>
  );
};

export default NavBar;
