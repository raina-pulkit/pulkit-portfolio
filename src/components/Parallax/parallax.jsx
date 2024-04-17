import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ySmall = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yLarge = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      ref={ref}
      className="parallax relative w-full h-full flex justify-center overflow-hidden"
      style={{
        background:
          item === "courses"
            ? "linear-gradient(180deg, rgb(146, 78, 78), #ffd1ff)"
            : "linear-gradient(180deg, rgb(146, 78, 78), #917191)",
      }}
    >
      <motion.h1
        style={{ y: yLarge }}
        className="title text-8xl z-[3] text-white my-24 text-center"
      >
        {item === "courses" ? "Education, Courses & Certification" : "Projects"}
      </motion.h1>

      <motion.div className="mountain absolute bg-cover bg-bottom w-full h-full z-[4] -bottom-20"></motion.div>
      <motion.div
        style={{ x: ySmall }}
        className="stars absolute bg-bottom w-full h-full z-[1]"
      ></motion.div>
      <motion.div
        style={{ x: ySmall }}
        className="sun absolute bg-cover bg-bottom w-full h-full z-[2]"
      ></motion.div>
    </div>
  );
}
