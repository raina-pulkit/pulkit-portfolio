import { motion } from "framer-motion";
import { useContext } from "react";
import { Contexts } from "../../context";

export default function ToggleButton({ setOpen }) {
  const { light } = useContext(Contexts);

  return (
    <>
      <button
        id="sidebar"
        className="w-[50px] h-[50px] rounded-[50%] fixed top-[25px] left-[1px] translate-x-2/4 border-none bg-transparent flex items-center justify-center hover:scale-90 transition duration-200 z-[999]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="svg-wrapper" style={{ pointerEvents: "none" }}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke={light ? "white" : "black"}
              strokeLinecap="round"
              variants={{
                closed: { transition: { delay: 0.5 }, d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke={light ? "white" : "black"}
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              initial={{
                opacity: 0,
              }}
              variants={{
                closed: { transition: { delay: 0.5 }, opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke={light ? "white" : "black"}
              strokeLinecap="round"
              variants={{
                closed: {
                  transition: { delay: 0.5 },
                  d: "M 2 16.346 L 20 16.346",
                },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </div>
      </button>
    </>
  );
}
