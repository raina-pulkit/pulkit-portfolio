import React, { useContext, useState } from "react";
import { lifeEvents } from "./lifeEvents.js";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Contexts } from "../../context.jsx";
import { FaX } from "react-icons/fa6";

export default function Courses() {
  const edStyles = {
    background: "#06D6A0",
  };
  const projStyles = {
    background: "#F9C74F",
  };
  const courseStyles = {
    background: "#06D6A0",
  };

  const { selectedId, setSelectedId } = useContext(Contexts);

  if (!selectedId) {
    return (
      <motion.div className="py-8 flex flex-col items-center bg-[#ecbdaa]">
        <motion.h1 className="text-6xl mb-9">
          Courses & Certifications
        </motion.h1>
        <VerticalTimeline>
          {lifeEvents.map((item) => {
            const isEd = item.icon === "school";
            const isProj = item.icon === "project";
            const isCourse = item.icon === "course";

            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                dateClassName="date"
                onTimelineElementClick={() => {
                  setSelectedId(item.id);
                }}
                style={{ transformOrigin: "50% 50% 0px" }}
                iconStyle={isEd ? edStyles : isProj ? projStyles : courseStyles}
                icon={
                  isEd ? (
                    <FaSchool />
                  ) : isProj ? (
                    <AiOutlineFundProjectionScreen />
                  ) : (
                    <IoSchoolSharp />
                  )
                }
              >
                <motion.h3 className="text-3xl">{item.title}</motion.h3>
                <motion.h5 className="">{item.location}</motion.h5>
                {item.buttonText ? (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    className={`${
                      isEd
                        ? "bg-green-300"
                        : isProj
                        ? "bg-yellow-300"
                        : "bg-green-600"
                    } hover:bg-gray-400 hover:scale-110 active:scale-100 transition duration-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-6`}
                  >
                    {item.buttonText}
                  </motion.a>
                ) : null}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </motion.div>
    );
  } else {
    const isEd = lifeEvents[selectedId - 1].icon === "school";
    const isProj = lifeEvents[selectedId - 1].icon === "project";
    return (
      <AnimatePresence>
        <div className="w-full h-full relative">
          <motion.div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-2/4 flex flex-col gap-5 justify-center items-center bg-purple-300 p-16 rounded-2xl shadow-2xl">
            <motion.div className="flex flex-col justify-center items-center text-center">
              <motion.h3 className="text-3xl">
                {lifeEvents[selectedId - 1].title}
              </motion.h3>
              <motion.h5 className="text-sm text-gray-600">
                {lifeEvents[selectedId - 1].location}
              </motion.h5>
            </motion.div>
            <motion.p className="text-center">{lifeEvents[selectedId - 1].description}</motion.p>
            {lifeEvents[selectedId - 1].buttonText ? (
              <motion.a
                href={lifeEvents[selectedId - 1].link}
                target="_blank"
                className={`${
                  isEd
                    ? "bg-green-300"
                    : isProj
                    ? "bg-yellow-300"
                    : "bg-green-600"
                } hover:bg-gray-400 hover:scale-110 active:scale-100 transition duration-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-6`}
              >
                {lifeEvents[selectedId - 1].buttonText}
              </motion.a>
            ) : null}
            <motion.button className="w-8 h-8 rounded-full bg-black flex justify-center items-center absolute top-3.5 right-3.5 hover:scale-95 transition duration-300" onClick={() => setSelectedId(prev => null)}><FaX color="white"/></motion.button>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }
}
