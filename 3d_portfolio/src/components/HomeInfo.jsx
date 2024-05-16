import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
      </Link>
    </div>
  );
};

const renderStages = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"> Luisa 😜!</span> Welcome to my{" "}
      <strong>Portfolio🚀</strong>
    </h1>
  ),
  2: (
    <InfoBox
      text="Check out the projects I've created."
      link="/projects"
      btnText={"Visit my portfolio"}
    />
  ),
  3: (
    <InfoBox
      text="I'm happy to hack! Check my curriculum and let's work together"
      link="/about"
      btnText={"Looking for a dev?"}
    />
  ),
  4: (
    <InfoBox
      text="Contact me to develop tools that enhance human potential."
      link="/contact"
      btnText={"Connect"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderStages[currentStage] || null;
};

export default HomeInfo;
