import React from "react";
import { lifeEvents } from "./lifeEvents.js";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './timeline.scss';

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

  return (
    <div className="py-8 flex flex-col items-center bg-[#ecbdaa] ">
      <h1 className="text-6xl mb-9">Courses & Certifications</h1>
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
				<h3 className="text-3xl">{item.title}</h3>
				<h5 className="">{item.location}</h5>
				<p>{item.description}</p>
				{
					item.buttonText ? 
					<a href="/" className={`${isEd ? "bg-green-300" : isProj ? "bg-yellow-300" : "bg-green-600"} hover:bg-gray-400 hover:scale-110 active:scale-100 transition duration-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-6`}>{item.buttonText}</a>
					: null
				}
			</VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
