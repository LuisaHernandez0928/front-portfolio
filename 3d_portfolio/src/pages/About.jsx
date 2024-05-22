import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow ml-3">
          Luisa
        </span>
      </h1>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, idx) => (
            <div key={idx + skill} className="w-20 h-20 block-container">
              <div className="btn-back rounded-lg">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text flex"> Work experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Front-end developer with 3 years of experience. Here's the rundown:{" "}
          </p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className="flex justify-center items-center w-full h-full"><img alt={experience.company_name} src={experience.icon} className="w-[60%] h-[60%] object-contain"/></div>}
              contentStyle={{borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none'}}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold m-0 p-0">
                  {experience.title}
                </h3>
                <p className="text-black-500 font-medium font-base m-0 p-0">
                  {experience.company_name}
                </p>
                <p>{experience.description}</p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, idx) => (
                  <li
                    key={`experince-point-${idx}`}
                    className="text-black-500 /50 font-medium font-base pl-1 m-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
