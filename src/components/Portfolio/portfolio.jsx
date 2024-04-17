import React, { useRef } from "react";
import { projList } from "./projectList.js";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Project = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-[1366px] h-full m-auto flex items-center justify-center gap-12">
          <div className="image-container flex-1 h-2/4 object-cover">
            <img src={item.img} />
          </div>
          <motion.div className="text-container flex-1 flex flex-col gap-8">
            <h2 className="text-7xl">{item.title}</h2>
            <p className="text-gray-400 text-xl">{item.desc}</p>
            <button className="bg-orange-400 border-none rounded-xl p-3 w-52 cursor-pointer">Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 pt-8 text-center text-purple-700 text-5xl">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="  h-[10px] bg-yellow-300">
        </motion.div>
      </div>

      {projList.map((item) => (
        <Project key={item.id} item={item} />
      ))}
    </div>
  );
}