import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import "./Sidebar.scss";
import { Contexts } from "../../context";
import $ from "jquery";

export default function SideBar() {
  const { open, setOpen, light } = useContext(Contexts);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  $(document).on("click",(e) => {
    console.log(e);
    if((e.target.id != 'sidebar') && (e.target.id != 'links')) {
      setOpen(false);
    }
  });

  return (
    <>
      <motion.div
        className= "flex flex-col items-center justify-center relative z-40"
        animate={open ? "open" : "closed"}
        data-theme = {light ? "light" : "dark"}
      >
        <motion.div
          className="bg fixed top-0 left-0 bottom-0 w-[400px] z-[998]"
          id = "sidebar"
          variants={variants}
          data-theme = {light ? "light" : "dark"}
        >
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
}
