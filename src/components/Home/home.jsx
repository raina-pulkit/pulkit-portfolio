import "./home.scss";
import { animate, motion } from "framer-motion";

export default function Home() {
  const vars = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scroll: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const slideVar = {
    initial: {
      x: 0,
      transition: {
        duration: 0,
      },
    },
    animate: {
      x: -5500,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
      },
    },
    stiffness: 200,
  };

  return (
    <div className="home w-full overflow-hidden relative">
      <div className="w-3/4 h-full m-auto">
        <motion.div
          className="w-2/4 h-full flex flex-col justify-center gap-4"
          variants={vars}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-3xl tracking-widest text-purple-600"
            variants={vars}
          >
            PULKIT RAINA
          </motion.h2>
          <motion.h1 className="text-6xl text-purple-950 " variants={vars}>
            Full Stack Web Developer <span className="text-black">&</span>{" "}
            Competitive Programmer
          </motion.h1>
          <div className="flex gap-6 z-10">
            <motion.button
              variants={vars}
              className="p-5 border-2 border-black rounded-xl bg-transparent text-black text-xl cursor-pointer"
              whileHover={{ scale: 0.95, transition: { duration: 0.01 } }}
              whileTap={{ scale: 0.9 }}
            >
              See Latest Works
            </motion.button>
            <motion.button
              variants={vars}
              className="p-5 border-2 border-black rounded-xl bg-transparent text-black text-xl cursor-pointer"
              whileHover={{ scale: 0.95, transition: { duration: 0.01 } }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Me
            </motion.button>
          </div>
          <div>
            <motion.img
              variants={vars}
              animate="scroll"
              src="scroll.png"
              alt="scroll image"
              className="w-12 my-[-20px]"
            />
          </div>
        </motion.div>
        <motion.div
          variants={slideVar}
          initial="initial"
          animate="animate"
          className="px-20 absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-purple-950 opacity-35 w-2/4"
        >
          Content Creator Musician Full Stack Web Developer
        </motion.div>
        <div className="h-full absolute top-0 right-0">
          <img src="pulkit-home.png" alt="Pulkit's Pic" className="mx-56" />
        </div>
      </div>
    </div>
  );
}
